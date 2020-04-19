"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RoomType = use("App/Models/RoomType");

/**
 * Resourceful controller for interacting with roomtypes
 */
class RoomTypeController {
  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /roomtypes:
   *  get:
   *    tags:
   *      - Room Type
   *    summary: Lists all room types
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all room types
   *        example:
   *          id: 1
   *          Description: "XD"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const roomtypes = await RoomType.query().where("IsActived", true).fetch();

    return roomtypes;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /roomtypes:
   *  post:
   *    tags:
   *      - Room Type
   *    summary: Create a room type
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: roomtype
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"XD\"
   *          \n}"
   *        schema:
   *          $ref: '/roomtypes'
   *    responses:
   *      200:
   *        description: Return a room type
   *        example:
   *          id: 1
   *          Description: "XD"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const data = request.only(["Description", "IsActived"]);
    const roomtype = await RoomType.create(data);

    return roomtype;
  }

  //#region [Suagger: Method GET]
  /**
   * @swagger
   * /roomtypes/{id}:
   *  get:
   *    tags:
   *      - Room Type
   *    summary: Get a room type by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a room type
   *        example:
   *          id: 1
   *          Description: "XD"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const roomtype = await RoomType.findOrFail(params.id);

    return roomtype;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /roomtypes/{id}:
   *  put:
   *    tags:
   *      - Room Type
   *    summary: Update a room type by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: roomtype
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"XD\"
   *          \n}"
   *        schema:
   *          $ref: '/roomtypes'
   *    responses:
   *      200:
   *        description: Return a room type updated
   *        example:
   *          id: 1
   *          Description: "XD"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const roomtype = await RoomType.findOrFail(params.id);
    const data = request.only(["Description", "IsActived"]);

    roomtype.merge(data);
    await roomtype.save();

    return roomtype;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /roomtypes/{id}:
   *  delete:
   *    tags:
   *      - Room Type
   *    summary: Delete a room type by Id
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
    const roomtype = await RoomType.findOrFail(params.id);

    roomtype.IsActived = false;

    await roomtype.save();
  }
}

module.exports = RoomTypeController;
