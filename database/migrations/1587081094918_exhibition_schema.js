'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExhibitionSchema extends Schema {
  up () {
    this.create('exhibitions', (table) => {
      table.increments()
      table.integer('FilmId').unsigned().notNullable()
            .references('id').inTable('Film')
            .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('RoomId').unsigned().notNullable()
            .references('id').inTable('Room')
            .onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('ScheduleId').unsigned().notNullable()
            .references('id').inTable('Schedule')
            .onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('exhibitions')
  }
}

module.exports = ExhibitionSchema
