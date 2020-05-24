"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FilmSchema extends Schema {
  up() {
    this.create("Film", (table) => {
      table.increments();
      table.string("Name").notNullable();
      table.string("ApiCode").notNullable().unique();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("Film");
  }
}

module.exports = FilmSchema;
