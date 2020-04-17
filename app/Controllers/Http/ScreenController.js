'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Screen = use('App/Models/Screen')

/**
 * Resourceful controller for interacting with screens
 */
class ScreenController {
  /**
   * Show a list of all screens.
   * GET screens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const screens = await Screen.all()

    return screens
  }

  /**
   * Create/save a new screen.
   * POST screens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['Size', 'IsActived'])
    const screen = await Screen.create(data)

    return screen
  }

  /**
   * Display a single screen.
   * GET screens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const screen = await Screen.findOrFail(params.id)

    return screen
  }
  
  /**
   * Update screen details.
   * PUT or PATCH screens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const screen = await Screen.findOrFail(params.id)
    const data = request.only(['Size', 'IsActived'])

    screen.merge(data)
    await screen.save()

    return screen
  }

  /**
   * Delete a screen with id.
   * DELETE screens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request }) {
    const screen = await Screen.findOrFail(params.id)
    const data = request.only(['IsActived'])

    screen.merge(data)
    await screen.save()
  }
}

module.exports = ScreenController
