'use strict'

const Schema = use('Schema')

class QuotesTableSchema extends Schema {

  up () {
    this.create('quotes', (table) => {
      table.increments()
      table.string('booktable_id').notNullable().references('id').inTable('booktables')
      table.text('idezet').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('quotes')
  }

}

module.exports = QuotesTableSchema

