'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
 * 
 * @swagger
 * 
 * definitions:
 *  Screen:
 *      type: object
 *      properties:
 *          id:
 *              type: int
 *          Size:
 *              type: string
 *          IsActived:
 *              type: boolean
 *      required:
 *          - Size
 */
class Screen extends Model {
}

module.exports = Screen
