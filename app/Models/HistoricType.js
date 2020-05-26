"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class HistoricType extends Model {
  static get table() {
    return "HistoricType";
  }
}

module.exports = HistoricType;
