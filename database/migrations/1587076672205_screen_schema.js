'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScreenSchema extends Schema {
  up () {
    this.create('Screen', (table) => {
      table.increments()
      table.string('Size').notNullable()
      table.boolean('IsActived').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('Screen')
  }
}

module.exports = ScreenSchema
