"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/**
 *
 * @swagger
 *
 * definitions:
 *  RoomType:
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
class RoomType extends Model {
  static get table() {
    return "RoomType";
  }
}

module.exports = RoomType;
