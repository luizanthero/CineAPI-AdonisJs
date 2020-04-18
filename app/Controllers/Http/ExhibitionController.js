'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Exhibition = use('App/Models/Exhibition')

/**
 * Resourceful controller for interacting with exhibitions
 */
class ExhibitionController {
  /**
   * Show a list of all exhibitions.
   * GET exhibitions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const exhibition = await Exhibition.query()
          .with('film')
          .with('room')
          .with('roomtype')
          .with('screen')
          .with('schedule')
          .fetch()

    return exhibition
  }

  /**
   * Create/save a new exhibition.
   * POST exhibitions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['FilmId', 'RoomId', 'ScheduleId'])
    const exhibition = Exhibition.create(data)

    return exhibition
  }

  /**
   * Display a single exhibition.
   * GET exhibitions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const exhibition = await Exhibition.query()
          .with('film')
          .with('room')
          .with('roomtype')
          .with('screen')
          .with('schedule')
          .where('id', params.id).fetch()

    return exhibition
  }

  /**
   * Update exhibition details.
   * PUT or PATCH exhibitions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const exhibition = await Exhibition.findOrFail(params.id)
    const data = request.only(['FilmId', 'RoomId', 'ScheduleId'])

    exhibition.merge(data)
    await exhibition.save()

    return exhibition
  }

  /**
   * Delete a exhibition with id.
   * DELETE exhibitions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const exhibition = await Exhibition.findOrFail(params.id)

    exhibition.IsActived = false

    await exhibition.save()
  }
}

module.exports = ExhibitionController
