'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Film = use('App/Models/Film')

/**
 * Resourceful controller for interacting with films
 */
class FilmController {
  /**
   * Show a list of all films.
   * GET films
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const films = await Film.query().where('IsActived', true).fetch()

    return films
  }

  /**
   * Create/save a new film.
   * POST films
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['Name', 'ApiCode', 'IsActived'])
    const film = await Film.create(data)

    return film
  }

  /**
   * Display a single film.
   * GET films/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const film = await Film.findOrFail(params.id)

    return film
  }

  /**
   * Update film details.
   * PUT or PATCH films/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const film = await Film.findOrFail(params.id)
    const data = request.only(['Name', 'ApiCode', 'IsActived'])

    film.merge(data)
    await film.save()

    return film
  }

  /**
   * Delete a film with id.
   * DELETE films/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const film = await Film.findOrFail(params.id)

    film.IsActived = false

    await film.save()
  }
}

module.exports = FilmController
