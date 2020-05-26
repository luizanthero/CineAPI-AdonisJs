"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Historic = use("App/Business/HistoricBusiness");

/**
 * Resourceful controller for interacting with historic
 */
class HistoricController {
  async index() {
    const historics = await Historic.GetAll();

    return historics;
  }

  async indexPagination({ params }) {
    const historics = await Historic.GetAllPagination(
      params.page,
      params.limitPage
    );

    return historics;
  }

  async show({ params }) {
    const historic = Historic.GetById(params.id);

    return historic;
  }

  async showByUserName({ params }) {
    const historics = Historic.GetByUserName(params.userName);

    return historics;
  }

  async showByTableName({ params }) {
    const historics = Historic.GetByTableName(params.tableName);

    return historics;
  }

  async showByTableKey({ params }) {
    const historics = Historic.GetByTableKey(params.tableKey);

    return historics;
  }
}

module.exports = HistoricController;
