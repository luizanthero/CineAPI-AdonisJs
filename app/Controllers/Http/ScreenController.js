"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Screen = use("App/Business/Http/ScreenBusiness");

/**
 * Resourceful controller for interacting with screens
 */
class ScreenController {
  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /screens:
   *   get:
   *      tags:
   *        - Screen
   *    security:
   *      - bearerAuth: []
   *      summary: Lists all screens
   *      produces:
   *        - application/json
   *      responses:
   *          200:
   *            description: Return all screens
   *            example:
   *              id: 1
   *              Size: "Extreme"
   *              IsActived: true
   *          500:
   *            description: Internal Error
   */
  //#endregion
  async index() {
    const screens = await Screen.GetAll();

    return screens;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /screens/pagination/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Screen
   *    security:
   *      - bearerAuth: []
   *    summary: Lists all screens with pagination
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
   *        description: Return all screens
   *        example:
   *          total: 1
   *          perPage: 20
   *          page: 1
   *          lastPage: 1
   *          data:
   *            id: 1
   *            Size: "Extreme"
   *            IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const screens = await Screen.GetAllPagination(
      params.page,
      params.limitPage
    );

    return screens;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /screens:
   *   post:
   *      tags:
   *        - Screen
   *    security:
   *      - bearerAuth: []
   *      summary: Create a screen
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: screen
   *          in: body
   *          required: false
   *          type: string
   *          example:
   *            "{\n
   *              \t\"Size\": \"Grande\"
   *            \n}"
   *          schema:
   *            $ref: '/screens'
   *      responses:
   *          200:
   *            description: Return a screen
   *            example:
   *              id: 1
   *              Size: "Extreme"
   *              IsActived: true
   *          500:
   *            description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const screen = await Screen.Create(request);

    return screen;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /screens/{id}:
   *   get:
   *      tags:
   *        - Screen
   *    security:
   *      - bearerAuth: []
   *      summary: Get a screen by Id
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: id
   *          in: path
   *          required: true
   *          type: integer
   *      responses:
   *          200:
   *            description: Return a screen
   *            example:
   *              id: 1
   *              Size: "Extreme"
   *              IsActived: true
   *          500:
   *            description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const screen = await Screen.GetById(params.id);

    return screen;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /screens/{id}:
   *   put:
   *      tags:
   *        - Screen
   *    security:
   *      - bearerAuth: []
   *      summary: Update a screen by Id
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: id
   *          in: path
   *          required: true
   *          type: integer
   *        - name: screen
   *          in: body
   *          required: false
   *          type: string
   *          example:
   *            "{\n
   *              \t\"Size\": \"Grande\"
   *            \n}"
   *          schema:
   *            $ref: '/screens'
   *      responses:
   *          200:
   *            description: Return a screen updated
   *            example:
   *              id: 1
   *              Size: "Extreme"
   *              IsActived: true
   *          500:
   *            description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const screen = await Screen.Update(params.id, request);

    return screen;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /screens/{id}:
   *   delete:
   *      tags:
   *        - Screen
   *    security:
   *      - bearerAuth: []
   *      summary: Delete a screen by Id
   *      produces:
   *        - application/json
   *      parameters:
   *        - name: id
   *          in: path
   *          required: true
   *          type: integer
   *      responses:
   *          200:
   *            description: Success
   *          500:
   *            description: Internal Error
   */
  //#endregion
  async destroy({ params }) {
    await Screen.Delete(params.id);
  }
}

module.exports = ScreenController;
