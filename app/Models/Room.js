"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/**
 *
 * @swagger
 *
 * definitions:
 *  Room:
 *      type: object
 *      properties:
 *          id:
 *              type: int
 *          RoomTypeId:
 *              type: int
 *          ScreenId:
 *              type: int
 *          Name:
 *              type: string
 *          IsActived:
 *              type: boolean
 *              default: true
 *      required:
 *          - RoomTypeId
 *          - ScreenId
 *          - Name
 */
class Room extends Model {
  static get table() {
    return "Room";
  }

  roomtype() {
    return this.belongsTo("App/Models/RoomType", "RoomTypeId", "id");
  }

  screen() {
    return this.belongsTo("App/Models/Screen", "ScreenId", "id");
  }
}

module.exports = Room;
