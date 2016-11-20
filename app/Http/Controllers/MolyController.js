'use strict'

const Book = use('App/Model/Booktable')
const Type = use('App/Model/Type')
const Quote = use('App/Model/Quote')
const Read = use('App/Model/Read')
const User = use('App/Model/User')

const Validator = use('Validator')

class MolyController {
    * main (req, res) {
        const types = yield Type.all()

        /*const users = yield User.all()


        for (const user of users) {
            const reads = yield user.apiTokens().limit(3).fetch()
            user.reads = user.toJSON()
        }*/

        yield res.sendView('main', {
            types: types.toJSON()})//, users : users.toJSON()})
    }

    * showAllBook(req,res){
        const books = yield Book.all()
        yield res.sendView('allBook',{books: books.toJSON()})
    }

    * showBook(req, res){
        const book = yield Book.find(req.param('id'))
        yield book.related('type').load()
        yield res.sendView('book', {book: book.toJSON()})
    }

    * showType(req, res){
        const type = yield Type.find(req.param('id'))
        yield type.related('books').load()
        yield res.sendView('type', {type: type.toJSON()})
    }

    * addBook(req, res){
        const types = yield Type.all()
        yield res.sendView('addBook', {types:types.toJSON()})
    }

    * doAddBook(req, res){
        const datas = req.all()

        const rules = {
            'cim': 'required|min:3',
            'szerzo': 'required',
            'tartalom': 'required',
            'kiado': 'required',
        }

        const validation = yield Validator.validateAll(datas, rules)
        if (validation.fails()) {
            yield req.withAll().andWith({ errors: validation.messages() }).flash()

            res.redirect('/addBook')
            return
        }
        const book = new Book()
        book.cim = datas.cim
        book.szerzo = datas.szerzo
        book.tartalom = datas.tartalom
        book.kiado = datas.kiado
        book.type_id = datas.type_id
        book.oldalszam = datas.oldalszam

        yield book.save()

        res.redirect(`/book/${book.id}`)
    }

    * showQuotes(req, res){
        const book = yield Book.find(req.param('id'))
        yield book.related('quotes').load()
        yield res.sendView('quote', {book: book.toJSON()})
    }

    * addQuote(req, res){
        const books = yield Book.all()
        yield res.sendView('addQuote',{books: books.toJSON()})
    }

    * doAddQuote(req, res){
        const datas = req.all()

        const rules = {
            'idezet': 'required',
            'booktable_id': 'required'
        }

        const validation = yield Validator.validateAll(datas, rules)
        if (validation.fails()) {
            yield req.withAll().andWith({ errors: validation.messages() }).flash()

            res.redirect('/addQuote')
            return
        }
        const quote = new Quote()
        quote.idezet = datas.idezet
        quote.booktable_id = datas.booktable_id

        yield quote.save()

        res.redirect(`/book/${quote.booktable_id}/quotes`)
    }

    * edit(req, res){
        const types = yield Type.all()
        const book = yield Book.find(req.param('id'))
        yield res.sendView('edit', {types: types.toJSON(), book: book.toJSON()})
    }

    * doEdit(req, res){
        const book = yield Book.find(req.param('id'))

        if (book === null) {
            res.notFound('Nem található ilyen könyv :(')
            return
        }
        const datas = req.all()

        const rules = {
            'cim': 'required|min:3',
            'szerzo': 'required',
            'tartalom': 'required',
            'kiado': 'required',
        }

        const validation = yield Validator.validateAll(datas, rules)
        if (validation.fails()) {
            yield req.withAll().andWith({ errors: validation.messages() }).flash()

            res.redirect(`/book/${book.id}/edit`)
            return
        }

        book.cim = datas.cim
        book.szerzo = datas.szerzo
        book.tartalom = datas.tartalom
        book.kiado = datas.kiado
        book.type_id = datas.type_id
        book.oldalszam = datas.oldalszam

        yield book.save()

        res.redirect(`/book/${book.id}`)
    }

    * doDeleteQuote(req, res){
        const quote = yield Quote.find(req.param('id'))
        yield quote.delete()

        res.redirect('../')
    }

    * editQuote(req, res){
        const quote = yield Quote.find(req.param('id'))
        yield quote.related('book').load()
        yield res.sendView('editQ', {quote : quote.toJSON()})
    }

    * doEditQuote(req, res){
        const quote = yield Quote.find(req.param('id'))

        if (quote === null) {
            res.notFound('Nem található ilyen idézet :(')
            return
        }
        const datas = req.all()

        const rules = {
            'idezet': 'required',
            'booktable_id': 'required'
        }

        const validation = yield Validator.validateAll(datas, rules)
        if (validation.fails()) {
            yield req.withOut('idezet').andWith({ errors: validation.messages() }).flash()

            res.redirect('./edit')
            return
        }

        quote.idezet = datas.idezet
        quote.booktable_id = datas.booktable_id

        yield quote.save()

        res.redirect(`../`)

    }

    * addRead(req, res){
        const book = yield Book.find(req.param('id'))
        yield res.sendView('addRead', {book:book.toJSON()})
    }


    * doAddRead(req, res){
        const book = yield Book.find(req.param('id'))

        const datas = req.all()

        const rules = {
            'booktable_id' : 'required', 
            'user_id' : 'required'
        }


        const validation = yield Validator.validateAll(datas, rules)
        if (validation.fails()) {
            yield req.withAll().andWith({ errors: validation.messages() }).flash()

            res.redirect(`/book/${book.id}/addRead`)
            return
        }
        const read = new Read()
        read.booktable_id = datas.booktable_id
        read.user_id = datas.user_id
        
        yield read.save()

        res.redirect(`/book/${book.id}`)
    }


    * showProfile(req,res){
        const reads = yield Read.all()
        const books = yield Book.all()

        yield res.sendView('profile', {reads:reads.toJSON(), books:books.toJSON()})

    }

    * search(req, res){
        const page = Math.max(1, req.input('p'))
        const filters = {
            cim: req.input('cim') || '',
            kategoria: req.input('kategoria') || 0
        }

        const books = yield Book.query()
        .where(function(){
            if (filters.kategoria > 0) this.where('type_id', filters.kategoria)
            if (filters.cim > 0) this.where('cim', 'LIKE',`%${filters.cim}%`)
        }).with('type').paginate(page, 12)

        const types = yield Type.all()
        
        yield res.sendView('search', {books: books.toJSON(), types: types.toJSON(), filters})
    }
}

module.exports = MolyController
