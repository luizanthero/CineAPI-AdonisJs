"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExhibitionSchema extends Schema {
  up() {
    this.create("Exhibition", (table) => {
      table.increments();
      table.integer("FilmId").unsigned().references("id").inTable("Film");
      table.integer("RoomId").unsigned().references("id").inTable("Room");
      table
        .integer("ScheduleId")
        .unsigned()
        .references("id")
        .inTable("Schedule");
      table.timestamps();
    });
  }

  down() {
    this.drop("Exhibition");
  }
}

module.exports = ExhibitionSchema;
