'use strict'

const Lucid = use('Lucid')

class Type extends Lucid {
    books(){
        return this.hasMany('App/Model/Booktable')
    }
}

module.exports = Type
