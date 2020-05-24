"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Business/Http/UserBusiness");

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /users:
   *  post:
   *    tags:
   *      - User
   *    summary: Create an user
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: user
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Username\": \"teste\",
   *            \n\t\"Email\": \"teste@teste.com\",
   *            \n\t\"Password\": \"teste\"
   *          \n}"
   *        schema:
   *          $ref: '/users'
   *    responses:
   *      200:
   *        description: Return an user
   *        example:
   *          id: 1
   *          Username: "teste"
   *          Email: "teste@teste.com"
   *          Password: "string hash"
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async store({ request }) {
    const user = await User.Create(request);

    return user;
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /users/authentication:
   *  post:
   *    tags:
   *      - User
   *    summary: Get an User Token
   *    produces:
   *      - application/json
   *    parameters:
   *      - name: user
   *        in: body
   *        required: false
   *        type: string
   *        example:
   *          "{\n
   *            \t\"Username\": \"teste\",
   *            \n\t\"Password\": \"teste\"
   *          \n}"
   *        schema:
   *          $ref: '/users/authentication'
   *    responses:
   *      200:
   *        description: Return an user token
   *        example:
   *          type: "bearer"
   *          token: "string token"
   *          refreshToken: null
   *      500:
   *        description: Internal Error
   */
  //#endregion
  async authentication({ request, auth }) {
    const token = await User.GetToken(request, auth);

    return token;
  }
}

module.exports = UserController;
