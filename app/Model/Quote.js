'use strict'

const Lucid = use('Lucid')

class Quote extends Lucid {
    book(){
        return this.belongsTo('App/Model/Booktable')
    }

}

module.exports = Quote
