"use strict";

const Film = use("App/Models/Film");

class FilmBusiness {
  static async GetAll() {
    const films = await Film.query().where("IsActived", true).fetch();

    return films;
  }

  static async GetAllPagination(page, limitPage) {
    const films = await Film.query()
      .where("IsActived", true)
      .paginate(page, limitPage);

    return films;
  }

  static async Create(request) {
    const data = request.only(["Name", "ApiCode", "IsActived"]);
    const film = await Film.create(data);

    return film;
  }

  static async GetById(id) {
    const film = await Film.findOrFail(id);

    return film;
  }

  static async GetByApiCode(apiCode) {
    const film = await Film.query().where("ApiCode", apiCode).fetch();

    if (Array.isArray(film.rows) && film.rows.length) return true;

    return false;
  }

  static async Update(id, request) {
    const film = await Film.findOrFail(id);
    const data = request.only(["Name", "ApiCode", "IsActived"]);

    film.merge(data);
    await film.save();

    return film;
  }

  static async Delete(id) {
    const film = await Film.findOrFail(id);

    film.IsActived = false;

    await film.save();
  }
}

module.exports = FilmBusiness;
