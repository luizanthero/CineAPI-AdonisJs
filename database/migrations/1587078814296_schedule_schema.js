'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('Schedule', (table) => {
      table.increments()
      table.string('Description').notNullable()
      table.boolean('IsActived').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('Schedule')
  }
}

module.exports = ScheduleSchema
