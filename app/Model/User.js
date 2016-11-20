'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  reads(){
    return this.hasMany('App/Model/Read')
  }

}

module.exports = User
