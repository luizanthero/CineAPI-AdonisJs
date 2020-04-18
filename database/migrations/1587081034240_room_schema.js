'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('Room', (table) => {
      table.increments()
      table.integer('RoomTypeId').unsigned().notNullable()
            .references('id').inTable('room_types')
            .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('ScreenId').unsigned().notNullable()
            .references('id').inTable('screens')
            .onUpdate('CASCADE').onDelete('CASCADE')
      table.string('Name').notNullable()
      table.boolean('IsActived').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('Room')
  }
}

module.exports = RoomSchema
