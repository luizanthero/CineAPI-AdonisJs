"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const HistoricType = use("App/Business/HistoricTypeBusiness");

/**
 * Resourceful controller for interacting with historic type
 */
class HistoricTypeController {
  //#region [Suagger: Method GET]
  /**
   * @swagger
   * /historicTypes:
   *  get:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all historic types
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all historic types
   *        example:
   *          id: 1
   *          Description: "Criação"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const historicsType = await HistoricType.GetAll();

    return historicsType;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historicTypes/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all historics type with pagination
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
   *        description: Return all historic types
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            Description: "Criação"
   *            IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const historicsType = await HistoricType.GetAllPagination(
      params.page,
      params.limitPage
    );

    return historicsType;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /historicTypes:
   *  post:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Create a historic type
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: historic type
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"Criação\"
   *          \n}"
   *        schema:
   *          $ref: '/historicTypes'
   *    responses:
   *      200:
   *        description: Return a historic type
   *        example:
   *          id: 1
   *          Description: "Criação"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const entity = request.only(["Description"]);

    const historicType = HistoricType.Create(entity);

    return historicType;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historicTypes/{id}:
   *  get:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic type by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a historic type
   *        example:
   *          id: 1
   *          Description: "Criação"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const historicType = await HistoricType.GetById(params.id);

    return historicType;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historicTypes/{description}:
   *  get:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic type by Description
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: description
   *        in: path
   *        required: true
   *        type: string
   *    responses:
   *      200:
   *        description: Return a historic type
   *        example:
   *          id: 1
   *          Description: "Criação"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async showByDescription({ params }) {
    const historicType = await HistoricType.GetbyDescription(
      params.description
    );

    return historicType;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /historicTypes/{id}:
   *  put:
   *    tags:
   *      - Historic Type
   *    security:
   *      - bearerAuth: []
   *    summary: Update a historic type by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: historic type
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Description\": \"Criação\"
   *          \n}"
   *        schema:
   *          $ref: '/historicTypes'
   *    responses:
   *      200:
   *        description: Return a historic type updated
   *        example:
   *          id: 1
   *          Description: "Criação"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const entity = request.only(["Description"]);

    const historicType = HistoricType.Update(params.id, entity);

    return historicType;
  }
}

module.exports = HistoricTypeController;
