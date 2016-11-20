'use strict'

const Schema = use('Schema')

class BooktablesTableSchema extends Schema {

  up () {
    this.create('booktables', (table) => {
      table.increments()
      table.string('cim', 20).notNullable()
      table.string('szerzo', 20).notNullable()
      table.string('kiado', 20).notNullable()
      table.string('oldalszam', 4).notNullable()
      table.text('tartalom')
      table.string('type_id').notNullable().references('id').inTable('types')
      table.timestamps()
    })
  }

  down () {
    this.drop('booktables')
  }

}

module.exports = BooktablesTableSchema

