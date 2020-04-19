"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Room = use("App/Models/Room");

/**
 * Resourceful controller for interacting with rooms
 */
class RoomController {
  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /rooms:
   *  get:
   *    tags:
   *      - Room
   *    summary: Lists all rooms
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all rooms
   *        example:
   *          id: 1
   *          RoomTypeId: 1
   *          ScreenId: 1
   *          Name: "A01"
   *          IsActivec: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const rooms = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("IsActived", true)
      .fetch();

    return rooms;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /rooms:
   *  post:
   *    tags:
   *      - Room
   *    summary: Create a room
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: room
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"RoomTypeId\": 1,
   *            \n\t\"ScreenId\": 1,
   *            \n\t\"Name\": \"A01\"
   *          \n}"
   *        schema:
   *          $ref: '/rooms'
   *    responses:
   *        200:
   *          description: Return a room
   *          example:
   *            id: 1
   *            RoomTypeId: 1
   *            ScreenId: 1
   *            Name: "A01"
   *        500:
   *          description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const data = request.only(["RoomTypeId", "ScreenId", "Name", "IsActived"]);
    const room = await Room.create(data);

    return room;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /rooms/{id}:
   *  get:
   *    tags:
   *      - Room
   *    summary: Get a room by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a room
   *        example:
   *          id: 1
   *          RoomTypeId: 1
   *          ScreenId: 1
   *          Name: "A01"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const room = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("id", params.id)
      .fetch();

    return room;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /rooms/{id}:
   *  put:
   *    tags:
   *      - Room
   *    summary: Update a room by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: room
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"RoomTypeId\": 1,
   *            \n\t\"ScreenId\": 1,
   *            \n\t\"Name\": \"A01\"
   *          \n}"
   *        schema:
   *          $ref: '/rooms'
   *    responses:
   *      200:
   *        description: Return a room updated
   *        example:
   *          id: 1
   *          RoomTypeId: 1
   *          ScreenId: 1
   *          Name: 'A01'
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const room = await Room.findOrFail(params.id);
    const data = request.only(["RoomTypeId", "ScreenId", "Name", "IsActived"]);

    room.merge(data);
    await room.save();

    return room;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /rooms/{id}:
   *  delete:
   *    tags:
   *      - Room
   *    rummary: Delete a room by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Success
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async destroy({ params }) {
    const room = await Room.findOrFail(params.id);

    room.IsActived = false;

    await room.save();
  }
}

module.exports = RoomController;
