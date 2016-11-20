'use strict'

const Lucid = use('Lucid')

class Read extends Lucid {
    user(){
        return this.belongsTo('App/Model/User')
    }
    book(){
        return this.belongsTo('App/Model/Booktable')
    }

}

module.exports = Read
