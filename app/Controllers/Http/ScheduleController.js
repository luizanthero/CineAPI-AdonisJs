"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Schedule = use("App/Business/ScheduleBusiness");

/**
 * Resourceful controller for interacting with schedules
 */
class ScheduleController {
  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /schedules:
   *  get:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all schedules
   *    produces:
   *      -application/json
   *    responses:
   *      200:
   *        description: Return all schedules
   *        example:
   *          id: 1
   *          Description: "Noite"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const schedules = await Schedule.GetAll();

    return schedules;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /schedules/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all schedules with pagination
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
   *        description: Return all schedules
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            Description: "Noite"
   *            IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const schedules = await Schedule.GetAllPagination(
      params.page,
      params.limitPage
    );

    return schedules;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /schedules:
   *  post:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Create a schedule
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: schedule
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"Noite\"
   *          \n}"
   *        schema:
   *          $ref: '/schedules'
   *    responses:
   *      200:
   *        description: Return a schedule
   *        example:
   *          id: 1
   *          Description: "Noite"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const schedule = await Schedule.Create(request);

    return schedule;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /schedules/{id}:
   *  get:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Get a schedule by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a schedule
   *        example:
   *          id: 1
   *          Description: "Noite"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const schedule = await Schedule.GetById(params.id);

    return schedule;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /schedules/{id}:
   *  put:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Update a schedule by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: schedule
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"Noite\"
   *          \n}"
   *        schema:
   *          $ref: '/schedules'
   *    responses:
   *      200:
   *        description: Return a schedule updated
   *        example:
   *          id: 1
   *          Description: "Noite"
   *          IsActived: true
   *      500:
   *        description Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const schedule = await Schedule.Update(params.id, request);

    return schedule;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /schedules/{id}:
   *  delete:
   *    tags:
   *      - Schedule
   *    security:
   *      - bearerAuth: []
   *    summary: Delete a schedule by Id
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
    await Schedule.Delete(params.id);
  }
}

module.exports = ScheduleController;
