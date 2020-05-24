"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

/**
 *
 * @swagger
 *
 * definitions:
 *  User:
 *      type: object
 *      properties:
 *          id:
 *              type: int
 *          Username:
 *              type: string
 *          Email:
 *              type: string
 *          Password:
 *              type: string
 *          IsActived:
 *              type: boolean
 *              default: true
 *      required:
 *          - Username
 *          - Email
 *          - IsActived
 */
class User extends Model {
  static get table() {
    return "User";
  }
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async (userInstance) => {
      if (userInstance.dirty.Password) {
        userInstance.Password = await Hash.make(userInstance.Password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }
}

module.exports = User;
