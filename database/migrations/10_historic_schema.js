"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class HistoricSchema extends Schema {
  up() {
    this.create("Historic", (table) => {
      table.increments();
      table.string("UserName").notNullable();
      table.string("TableName").notNullable();
      table.integer("TableKey").notNullable();
      table.json("JsonBefore");
      table.json("JsonAfter");
      table.timestamp("Date").notNullable().defaultTo(this.fn.now());
      table
        .integer("HistoricTypeId")
        .unsigned()
        .references("id")
        .inTable("HistoricType");
    });
  }

  down() {
    this.drop("Historic");
  }
}

module.exports = HistoricSchema;
