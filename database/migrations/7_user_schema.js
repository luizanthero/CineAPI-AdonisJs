"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("User", (table) => {
      table.increments();
      table.string("Username").notNullable().unique();
      table.string("Email").notNullable().unique();
      table.string("Password").notNullable();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("User");
  }
}

module.exports = UserSchema;
