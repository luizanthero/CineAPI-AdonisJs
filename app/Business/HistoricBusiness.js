"use strict";

const Historic = use("App/Models/Historic");

class HistoricBusiness {
  static async GetAll() {
    const historics = Historic.all();

    return historics;
  }

  static async GetAllPagination(page, limitPage) {
    const historics = Historic.query().paginate(page, limitPage);

    return historics;
  }

  static async Create(entity) {
    const historic = await Historic.create(entity);

    return historic;
  }

  static async GetById(id) {
    const historic = await Historic.findOrFail(id);

    return historic;
  }

  static async GetByTableName(tableName) {
    const historics = await Historic.query()
      .where("TableName", tableName)
      .fetch();

    return historics;
  }

  static async GetByUserName(userName) {
    const historics = await Historic.query()
      .where("UserName", userName)
      .fetch();

    return historics;
  }

  static async GetByTableKey(tableKey) {
    const historics = await Historic.query()
      .where("TableKey", tableKey)
      .fetch();

    return historics;
  }

  static async Update(id, entity) {
    const historic = Historic.findOrFail(id);

    historic.merge(entity);
    await historic.save();

    return historic;
  }

  static async Delete(id) {
    const historic = Historic.findOrFail(id);

    await historic.delete();
  }

  static async DeleteByHistoricTypeId(historicTypeId) {
    const historic = Historic.query()
      .where("HistoricTypeId", historicTypeId)
      .fetch();

    await historic.delete();
  }
}

module.exports = HistoricBusiness;
