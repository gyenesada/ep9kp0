'use strict'

const Schema = use('Schema')

class ReadsTableSchema extends Schema {

  up () {
    this.create('reads', (table) => {
      table.increments()
      table.string('booktable_id').notNullable().references('id').inTable('booktables')
      table.string('user_id').notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('reads')
  }

}

module.exports = ReadsTableSchema

