"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Exhibition = use("App/Business/Http/ExhibitionBusiness");

/**
 * Resourceful controller for interacting with exhibitions
 */
class ExhibitionController {
  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /exhibitions:
   *  get:
   *    tags:
   *      - Exhibition
   *    summary: Lists all exhibitions
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all exhibitions
   *        example:
   *          id: 1
   *          FilmId: 1
   *          RoomId: 1
   *          ScheduleId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const exhibition = await Exhibition.GetAll();

    return exhibition;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /exhibitions:
   *  post:
   *    tags:
   *      - Exhibition
   *    summary: Create an exhibition
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: exhibition
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"FilmId\": 1,
   *            \n\t\"RoomId\": 1,
   *            \n\t\"ScheduleId\": 1
   *          \n}"
   *        schema:
   *          $ref: '/exhibitions'
   *    responses:
   *      200:
   *        description: Return an exhibition
   *        example:
   *          id: 1
   *          FilmId: 1
   *          RoomId: 1
   *          ScheduleId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const exhibition = Exhibition.Create(request);

    return exhibition;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /exhibitions/{id}:
   *  get:
   *    tags:
   *      - Exhibition
   *    summary: Get an exhibition by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return an exhibition
   *        example:
   *          id: 1
   *          FilmId: 1
   *          RoomId: 1
   *          Schedule: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const exhibition = await Exhibition.GetById(params.id);

    return exhibition;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /exhibitions/{id}:
   *  put:
   *    tags:
   *      - Exhibition
   *    summary: Update an screen by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: exhibition
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"FilmId\": 1,
   *            \n\t\"RoomId\": 1,
   *            \n\t\"ScheduleId\": 1
   *          \n}"
   *        schema:
   *          $ref: '/exhibitions'
   *    responses:
   *      200:
   *        description: Return an exhibition updated
   *        example:
   *          id: 1
   *          FilmId: 1
   *          RoomId: 1
   *          ScheduleId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const exhibition = await Exhibition.Update(params.id, request);

    return exhibition;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /exhibitions/{id}:
   *  delete:
   *    tags:
   *      - Exhibition
   *    summary: Delete an exhibition by Id
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
    await Exhibition.Delete(params.id);
  }
}

module.exports = ExhibitionController;
