"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Role extends Model {
  static get table() {
    return "Role";
  }

  user() {
    return this.belongsTo("App/Models/User", "UserId", "id");
  }
}

module.exports = Role;
