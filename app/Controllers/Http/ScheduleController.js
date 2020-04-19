"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Schedule = use("App/Models/Schedule");

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
    const schedules = await Schedule.query().where("IsActived", true).fetch();

    return schedules;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /schedules:
   *  post:
   *    tags:
   *      - Schedule
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
    const data = request.only(["Description", "IsActived"]);
    const schedule = await Schedule.create(data);

    return schedule;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /schedules/{id}:
   *  get:
   *    tags:
   *      - Schedule
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
    const schedule = await Schedule.findOrFail(params.id);

    return schedule;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /schedules/{id}:
   *  put:
   *    tags:
   *      - Schedule
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
    const schedule = await Schedule.findOrFail(params.id);
    const data = request.only(["Description", "IsActived"]);

    schedule.merge(data);
    await schedule.save();

    return schedule;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /schedules/{id}:
   *  delete:
   *    tags:
   *      - Schedule
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
    const schedule = await Schedule.findOrFail(params.id);

    schedule.IsActived = false;

    await schedule.save();
  }
}

module.exports = ScheduleController;
