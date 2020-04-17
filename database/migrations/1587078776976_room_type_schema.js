'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomTypeSchema extends Schema {
  up () {
    this.create('room_types', (table) => {
      table.increments()
      table.string('Description').notNullable()
      table.boolean('IsActived').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('room_types')
  }
}

module.exports = RoomTypeSchema
