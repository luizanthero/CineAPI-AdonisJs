'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomTypeSchema extends Schema {
  up () {
    this.create('RoomType', (table) => {
      table.increments()
      table.string('Description').notNullable()
      table.boolean('IsActived').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('RoomType')
  }
}

module.exports = RoomTypeSchema
