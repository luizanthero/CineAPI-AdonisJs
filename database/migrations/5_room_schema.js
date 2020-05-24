"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoomSchema extends Schema {
  up() {
    this.create("Room", (table) => {
      table.increments();
      table
        .integer("RoomTypeId")
        .unsigned()
        .references("id")
        .inTable("RoomType");
      table.integer("ScreenId").unsigned().references("id").inTable("Screen");
      table.string("Name").notNullable().unique();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("Room");
  }
}

module.exports = RoomSchema;
