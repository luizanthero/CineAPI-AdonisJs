'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const RoomType = use('App/Models/RoomType')

/**
 * Resourceful controller for interacting with roomtypes
 */
class RoomTypeController {
  /**
   * Show a list of all roomtypes.
   * GET roomtypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const roomtypes = await RoomType.query().where('IsActived', true).fetch()

    return roomtypes
  }

  /**
   * Create/save a new roomtype.
   * POST roomtypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['Description', 'IsActived'])
    const roomtype = await RoomType.create(data)

    return roomtype
  }

  /**
   * Display a single roomtype.
   * GET roomtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const roomtype = await RoomType.findOrFail(params.id)

    return roomtype
  }

  /**
   * Update roomtype details.
   * PUT or PATCH roomtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const roomtype = await RoomType.findOrFail(params.id)
    const data = request.only(['Description', 'IsActived'])

    roomtype.merge(data)
    await roomtype.save()

    return roomtype
  }

  /**
   * Delete a roomtype with id.
   * DELETE roomtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const roomtype = await RoomType.findOrFail(params.id)

    roomtype.IsActived = false

    await roomtype.save()
  }
}

module.exports = RoomTypeController
