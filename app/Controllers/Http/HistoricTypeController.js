"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const HistoricType = use("App/Business/HistoricTypeBusiness");

/**
 * Resourceful controller for interacting with films
 */
class HistoricTypeController {
  async index() {
    const historicsType = await HistoricType.GetAll();

    return historicsType;
  }

  async indexPagination({ params }) {
    const historicsType = await HistoricType.GetAllPagination(
      params.page,
      params.limitPage
    );

    return historicsType;
  }

  async store({ request }) {
    const entity = request.only(["Description"]);

    const historicType = HistoricType.Create(entity);

    return historicType;
  }

  async show({ params }) {
    const historicType = await HistoricType.GetById(params.id);

    return historicType;
  }

  async showByDescription({ params }) {
    const historicType = await HistoricType.GetbyDescription(
      params.description
    );

    return historicType;
  }

  async update({ params, request }) {
    const entity = request.only(["Description"]);

    const historicType = HistoricType.Update(params.id, entity);

    return historicType;
  }
}

module.exports = HistoricTypeController;
