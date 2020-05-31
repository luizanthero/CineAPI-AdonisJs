"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserRoleSchema extends Schema {
  up() {
    this.create("UserRole", (table) => {
      table.integer("UserId").unsigned().references("id").inTable("User");
      table.integer("RoleId").unsigned().references("id").inTable("Role");
      table.unique(["UserId", "RoleId"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("UserRole");
  }
}

module.exports = UserRoleSchema;
