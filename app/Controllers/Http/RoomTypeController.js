"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RoomType = use("App/Business/Http/RoomTypeBusiness");

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
    const roomtypes = await RoomType.GetAll();

    return roomtypes;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /roomtypes/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Room Type
   *    summary: Lists all room types with pagination
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
   *        description: Return all room types
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            Description: "XD"
   *            IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const roomtypes = await RoomType.GetAllPagination(
      params.page,
      params.limitPage
    );

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
    const roomtype = await RoomType.Create(request);

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
    const roomtype = await RoomType.GetById(params.id);

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
    const roomtype = await RoomType.Update(params.id, request);

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
    await RoomType.Delete(params.id);
  }
}

module.exports = RoomTypeController;
