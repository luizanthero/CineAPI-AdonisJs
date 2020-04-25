"use strict";

const Exhibition = use("App/Models/Exhibition");

class ExhibitionBusiness {
  static async GetAll() {
    const exhibition = await Exhibition.query()
      .with("film")
      .with("room")
      .with("roomtype")
      .with("screen")
      .with("schedule")
      .fetch();

    return exhibition;
  }

  static async Create(request) {
    const data = request.only(["FilmId", "RoomId", "ScheduleId"]);
    const exhibition = Exhibition.create(data);

    return exhibition;
  }

  static async GetById(id) {
    const exhibition = await Exhibition.query()
      .with("film")
      .with("room")
      .with("roomtype")
      .with("screen")
      .with("schedule")
      .where("id", id)
      .fetch();

    return exhibition;
  }

  static async Update(id, request) {
    const exhibition = await Exhibition.findOrFail(id);
    const data = request.only(["FilmId", "RoomId", "ScheduleId"]);

    exhibition.merge(data);
    await exhibition.save();

    return exhibition;
  }

  static async Delete(id) {
    const exhibition = await Exhibition.findOrFail(id);

    await exhibition.delete();
  }
}

module.exports = ExhibitionBusiness;
