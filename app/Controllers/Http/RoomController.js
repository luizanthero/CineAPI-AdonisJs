'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Room = use('App/Models/Room')

/**
 * Resourceful controller for interacting with rooms
 */
class RoomController {
  /**
   * Show a list of all rooms.
   * GET rooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const rooms = await Room.query().with('roomtype').with('screen').where('IsActived', true).fetch()

    return rooms
  }

  /**
   * Create/save a new room.
   * POST rooms
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['RoomTypeId', 'ScreenId', 'Name', 'IsActived'])
    const room = await Room.create(data)

    return room
  }

  /**
   * Display a single room.
   * GET rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const room = await Room.query().with('roomtype').with('screen').where('id', params.id).fetch()

    return room
  }

  /**
   * Update room details.
   * PUT or PATCH rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const room = await Room.findOrFail(params.id)
    const data = request.only(['RoomTypeId', 'ScreenId', 'Name', 'IsActived'])

    room.merge(data)
    await room.save()

    return room
  }

  /**
   * Delete a room with id.
   * DELETE rooms/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const room = await Room.findOrFail(params.id)

    room.IsActived = false

    await room.save()
  }
}

module.exports = RoomController
