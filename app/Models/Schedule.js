"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/**
 *
 * @swagger
 *
 * definitions:
 *  Schedule:
 *      type: object
 *      properties:
 *          id:
 *              type: int
 *          Description:
 *              type: string
 *          IsActived:
 *              type: boolean
 *              default: true
 *      required:
 *          - Description
 */
class Schedule extends Model {
  static get table() {
    return "Schedule";
  }
}

module.exports = Schedule;
