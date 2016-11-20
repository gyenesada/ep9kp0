'use strict'

const Lucid = use('Lucid')

class Booktable extends Lucid {
    type(){
        return this.belongsTo('App/Model/Type')
    }
    quotes(){
        return this.hasMany('App/Model/Quote')
    }
    reads(){
        return this.hasMany('App/Model/Read')
    }
}

module.exports = Booktable
