"use strict";

const HistoricType = use("App/Models/HistoricType");

class HistoricTypeBusiness {
  static async GetAll() {
    const historicsType = await HistoricType.query()
      .where("IsActived", true)
      .fetch();

    return historicsType;
  }

  static async GetAllPagination(page, limitPage) {
    const historicsType = await HistoricType.query()
      .where("IsActived", true)
      .paginate(page, limitPage);

    return historicsType;
  }

  static async Create(entity) {
    const historicType = await HistoricType.create(entity);

    return historicType;
  }

  static async GetById(id) {
    const historicType = await HistoricType.findOrFail(id);

    return historicType;
  }

  static async GetByDescription(description) {
    const historicType = await HistoricType.query()
      .where("Description", description)
      .fetch();

    return historicType;
  }

  static async Update(id, entity) {
    const historicType = HistoricType.findOrFail(id);

    historicType.merge(entity);
    await historicType.save();

    return historicType;
  }

  static async Delete(id) {
    const historicType = HistoricType.findOrFail(id);

    historicType.IsActived = false;

    await historicType.save();
  }
}

module.exports = HistoricTypeBusiness;
