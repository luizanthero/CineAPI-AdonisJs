"use strict";

const Screen = use("App/Models/Screen");

class ScreenBusiness {
  static async GetAll() {
    const screens = await Screen.query().where("IsActived", true).fetch();

    return screens;
  }

  static async GetAllPagination(page, limitPage) {
    const screens = await Screen.query()
      .where("IsActived", true)
      .paginate(page, limitPage);

    return screens;
  }

  static async Create(request) {
    const data = request.only(["Size", "IsActived"]);
    const screen = await Screen.create(data);

    return screen;
  }

  static async GetById(id) {
    const screen = await Screen.findOrFail(id);

    return screen;
  }

  static async Update(id, request) {
    const screen = await Screen.findOrFail(id);
    const data = request.only(["Size", "IsActived"]);

    screen.merge(data);
    await screen.save();

    return screen;
  }

  static async Delete(id) {
    const screen = await Screen.findOrFail(id);

    screen.IsActived = false;

    await screen.save();
  }
}

module.exports = ScreenBusiness;
