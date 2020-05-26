"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Historic = use("App/Business/HistoricBusiness");

/**
 * Resourceful controller for interacting with historic
 */
class HistoricController {
  //#region [Suagger: Method GET]
  /**
   * @swagger
   * /historics:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all historics
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all historics
   *        example:
   *          id: 1
   *          UserName: "luizanthero"
   *          TableName: "Film"
   *          TableKey: 1
   *          JsonBefore: "teste"
   *          JsonAfter: "teste"
   *          Date: "25/05/2020"
   *          HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const historics = await Historic.GetAll();

    return historics;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historics/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all historics with pagination
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
   *        description: Return all historics
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            UserName: "luizanthero"
   *            TableName: "Film"
   *            TableKey: 1
   *            JsonBefore: "teste"
   *            JsonAfter: "teste"
   *            Date: "25/05/2020"
   *            HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const historics = await Historic.GetAllPagination(
      params.page,
      params.limitPage
    );

    return historics;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historics/{id}:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a historic
   *        example:
   *          id: 1
   *          UserName: "luizanthero"
   *          TableName: "Film"
   *          TableKey: 1
   *          JsonBefore: "teste"
   *          JsonAfter: "teste"
   *          Date: "25/05/2020"
   *          HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const historic = Historic.GetById(params.id);

    return historic;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historics/userName/{userName}:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic by UserName
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: userName
   *        in: path
   *        required: true
   *        type: string
   *    responses:
   *      200:
   *        description: Return a historic
   *        example:
   *          id: 1
   *          UserName: "luizanthero"
   *          TableName: "Film"
   *          TableKey: 1
   *          JsonBefore: "teste"
   *          JsonAfter: "teste"
   *          Date: "25/05/2020"
   *          HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async showByUserName({ params }) {
    const historics = Historic.GetByUserName(params.userName);

    return historics;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historics/tableName/{tableName}:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic by Table Name
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: tableName
   *        in: path
   *        required: true
   *        type: string
   *    responses:
   *      200:
   *        description: Return a historic
   *        example:
   *          id: 1
   *          UserName: "luizanthero"
   *          TableName: "Film"
   *          TableKey: 1
   *          JsonBefore: "teste"
   *          JsonAfter: "teste"
   *          Date: "25/05/2020"
   *          HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async showByTableName({ params }) {
    const historics = Historic.GetByTableName(params.tableName);

    return historics;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /historics/tableKey/{tableKey}:
   *  get:
   *    tags:
   *      - Historic
   *    security:
   *      - bearerAuth: []
   *    summary: Get a historic by Table Key
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: tableKey
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a historic
   *        example:
   *          id: 1
   *          UserName: "luizanthero"
   *          TableName: "Film"
   *          TableKey: 1
   *          JsonBefore: "teste"
   *          JsonAfter: "teste"
   *          Date: "25/05/2020"
   *          HistoricTypeId: 1
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async showByTableKey({ params }) {
    const historics = Historic.GetByTableKey(params.tableKey);

    return historics;
  }
}

module.exports = HistoricController;
