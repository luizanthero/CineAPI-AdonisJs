"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RolesSchema extends Schema {
  up() {
    this.create("Role", (table) => {
      table.increments();
      table.integer("UserId").unsigned().references("id").inTable("User");
      table.string("Description").unique().notNullable();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("Role");
  }
}

module.exports = RolesSchema;
