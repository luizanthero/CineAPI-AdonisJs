"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class HistoricTypeSchema extends Schema {
  up() {
    this.create("HistoricType", (table) => {
      table.increments();
      table.string("Description").notNullable().unique();
      table.boolean("IsActived").notNullable().defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("HistoricType");
  }
}

module.exports = HistoricTypeSchema;
