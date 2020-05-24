"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TokenSchema extends Schema {
  up() {
    this.create("Token", (table) => {
      table.increments();
      table.integer("UserId").unsigned().references("id").inTable("User");
      table.string("Token").notNullable().unique().index();
      table.string("Type", 80).notNullable();
      table.boolean("IsRevoked").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("Token");
  }
}

module.exports = TokenSchema;
