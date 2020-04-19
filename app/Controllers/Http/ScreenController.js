'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Screen = use('App/Models/Screen')

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
   *      summary: Lists all screens
   *      produces:
   *        - application/json
   *      responses:
   *          200:
   *            description: Return all screens
   *            example:
   *              id: 1
   *              Size: 'Extreme'
   *              IsActived: true
   */
  //#endregion
  async index () {
    const screens = await Screen.query().where('IsActived', true).fetch()

    return screens
  }

  //#region [Swagger: Method POST]
  /**
   * @swagger
   * /screens:
   *   post:
   *      tags: 
   *        - Screen
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
   *              Size: 'Extreme'
   *              IsActived: true
   */
  //#endregion
  async store ({ request }) {
    const data = request.only(['Size', 'IsActived'])
    const screen = await Screen.create(data)

    return screen
  }

  //#region [Swagger: Method GET]
  /**
   * @swagger
   * /screens/{id}:
   *   get:
   *      tags: 
   *        - Screen
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
   *              Size: 'Extreme'
   *              IsActived: true
   */
  //#endregion
  async show ({ params }) {
    const screen = await Screen.findOrFail(params.id)

    return screen
  }
  
  //#region [Swagger: Method PUT]
  /**
   * @swagger
   * /screens/{id}:
   *   put:
   *      tags: 
   *        - Screen
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
   *              Size: 'Extreme'
   *              IsActived: true
   */
  //#endregion
  async update ({ params, request }) {
    const screen = await Screen.findOrFail(params.id)
    const data = request.only(['Size', 'IsActived'])

    screen.merge(data)
    await screen.save()

    return screen
  }

  //#region [Swagger: Method DELETE]
  /**
   * @swagger
   * /screens/{id}:
   *   delete:
   *      tags: 
   *        - Screen
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
   */
  //#endregion
  async destroy ({ params, request }) {
    const screen = await Screen.findOrFail(params.id)

    screen.IsActived = false
    
    await screen.save()
  }
}

module.exports = ScreenController
