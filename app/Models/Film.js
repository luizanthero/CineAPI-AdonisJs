"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/**
 *
 * @swagger
 *
 * definitions:
 *  Film:
 *      type: object
 *      properties:
 *          id:
 *              type: int
 *          Name:
 *              type: string
 *          ApiCode:
 *              type: string
 *          IsActived:
 *              type: boolean
 *      required:
 *          - Name
 *          - ApiCode
 */
class Film extends Model {}

module.exports = Film;
