"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FilmSchema extends Schema {
  up() {
    this.create("Film", (table) => {
      table.increments();
      table.string("Name").notNullable();
      table.string("ApiCode").notNullable().unique();
      table.string("Year").notNullable();
      table.string("Released").notNullable();
      table.string("Runtime").notNullable();
      table.string("Genre").notNullable();
      table.string("Director").notNullable();
      table.string("Writer").notNullable();
      table.string("Actors").notNullable();
      table.string("Plot").notNullable();
      table.string("Language").notNullable();
      table.string("Country").notNullable();
      table.string("Awards").notNullable();
      table.string("Poster").notNullable();
      table.string("Type").notNullable();
      table.string("Production").notNullable();
      table.string("Website").notNullable();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("Film");
  }
}

module.exports = FilmSchema;
