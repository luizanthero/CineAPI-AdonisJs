"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Room = use("App/Business/Http/RoomBusiness");

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
   *    security:
   *      - bearerAuth: []
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
    const rooms = await Room.GetAll();

    return rooms;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /rooms/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Room
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all rooms with pagination
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: page
   *        in: path
   *        required: false
   *        type: integer
   *      - name: limitPage
   *        in: path
   *        required: false
   *        type: integer
   *    responses:
   *      200:
   *        description: Return all rooms
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            RoomTypeId: 1
   *            ScreenId: 1
   *            Name: "A01"
   *            IsActivec: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const rooms = await Room.GetAllPagination(params.page, params.limitPage);

    return rooms;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /rooms:
   *  post:
   *    tags:
   *      - Room
   *    security:
   *      - bearerAuth: []
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
    const room = await Room.Create(request);

    return room;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /rooms/{id}:
   *  get:
   *    tags:
   *      - Room
   *    security:
   *      - bearerAuth: []
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
    const room = await Room.GetById(params.id);

    return room;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /rooms/{id}:
   *  put:
   *    tags:
   *      - Room
   *    security:
   *      - bearerAuth: []
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
    const room = await Room.Update(params.id, request);

    return room;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /rooms/{id}:
   *  delete:
   *    tags:
   *      - Room
   *    security:
   *      - bearerAuth: []
   *    summary: Delete a room by Id
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
    await Room.Delete(params.id);
  }
}

module.exports = RoomController;
