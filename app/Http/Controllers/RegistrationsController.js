'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')

const Read = use('App/Model/Read')


class RegistrationsController {
    * reg(req, res){
        yield res.sendView('reg')
    }

    * login(req, res){
        yield res.sendView('login')
    }

    * doReg(req, res){
        const datas = req.all()

        const rules={
            'email' : 'required',
            'username' : 'required',
            'password' : 'required|min:3',
            'password_again': 'required|same:password'
        }
        const validation = yield Validator.validateAll(datas, rules)

        if (validation.fails()){
            yield req.withOut('password', 'password_again').andWith({errors: validation.messages()}).flash()

            res.redirect('/reg')
            return
        }

        const user = new User()
        user.username = datas.username
        user.email = datas.email
        user.password = yield Hash.make(datas.password)

        yield user.save()
        yield req.auth.login(user)
        res.redirect('/')
    }

    * doLogout(req, res){
        yield req.auth.logout()
        res.redirect('/')
    }

    * doLogin(req, res){
        const email = req.input('email')
        const password = req.input('password')

        try{
            yield req.auth.attempt(email, password)
            res.redirect('/')
        }catch(ex){
            yield req.with({error: 'Rossz belépési adatok'}).flash()

            res.redirect('/login')
        }
    }


}

module.exports = RegistrationsController
