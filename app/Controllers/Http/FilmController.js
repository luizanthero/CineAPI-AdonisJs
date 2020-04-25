"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Film = use("App/Business/Http/FilmBusiness");

/**
 * Resourceful controller for interacting with films
 */
class FilmController {
  //#region [Suagger: Method GET]
  /**
   * @swagger
   * /films:
   *  get:
   *    tags:
   *      - Film
   *    summary: Lists all films
   *    produces:
   *      - application/json
   *    responses:
   *      200:
   *        description: Return all films
   *        example:
   *          id: 1
   *          Name: "Wonder Woman"
   *          ApiCode: "tt0451279"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async index() {
    const films = await Film.GetAll();

    return films;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /films/{page}/{limitPage}:
   *  get:
   *    tags:
   *      - Film
   *    summary: Lists all films with pagination
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: page
   *        in: path
   *        required: true
   *        type: integer
   *      - name: limitPage
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return all films
   *        example:
   *          id: 1
   *          Name: "Wonder Woman"
   *          ApiCode: "tt0451279"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async indexPagination({ params }) {
    const films = await Film.GetAllPagination(params.page, params.limitPage);

    return films;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /films:
   *  post:
   *    tags:
   *      - Film
   *    summary: Create a film
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: film
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Name\": \"Wonder Woman\",
   *            \n\t\"ApiCode\": \"tt0451279\"
   *          \n}"
   *        schema:
   *          $ref: '/films'
   *    responses:
   *      200:
   *        description: Return a film
   *        example:
   *          id: 1
   *          Name: "Wonder Woman"
   *          ApiCode: "tt0451279"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const film = await Film.Create(request);

    return film;
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /films/{id}:
   *  get:
   *    tags:
   *      - Film
   *    summary: Get a film by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *    responses:
   *      200:
   *        description: Return a film
   *        example:
   *          id: 1
   *          Name: "Wonder Woman"
   *          ApiCode: "tt0451279"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async show({ params }) {
    const film = await Film.GetById(params.id);

    return film;
  }

  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /films/{id}:
   *  put:
   *    tags:
   *      - Film
   *    summary: Update a film by Id
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: id
   *        in: path
   *        required: true
   *        type: integer
   *      - name: film
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Name\": \"Wonder Woman\",
   *            \n\t\"ApiCode\": \"tt0451279\"
   *          \n}"
   *        schema:
   *          $ref: '/films'
   *    responses:
   *      200:
   *        description: Return a film updated
   *        example:
   *          id: 1
   *          Name: "Wonder Woman"
   *          ApiCode: "tt0451279"
   *          IsActived: true
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async update({ params, request }) {
    const film = await Film.Update(params.id, request);

    return film;
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /films/{id}:
   *  delete:
   *    tags:
   *      - Film
   *    summary: Delete a film by Id
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
    await Film.Delete(params.id);
  }
}

module.exports = FilmController;
