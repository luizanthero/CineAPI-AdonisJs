"use strict";

const RoomType = use("App/Models/RoomType");

class RoomTypeBusiness {
  static async GetAll() {
    const roomtypes = await RoomType.query().where("IsActived", true).fetch();

    return roomtypes;
  }

  static async Create(request) {
    const data = request.only(["Description", "IsActived"]);
    const roomtype = await RoomType.create(data);

    return roomtype;
  }

  async GetById(id) {
    const roomtype = await RoomType.findOrFail(id);

    return roomtype;
  }

  async Update(id, request) {
    const roomtype = await RoomType.findOrFail(id);
    const data = request.only(["Description", "IsActived"]);

    roomtype.merge(data);
    await roomtype.save();

    return roomtype;
  }

  async Delete(id) {
    const roomtype = await RoomType.findOrFail(id);

    roomtype.IsActived = false;

    await roomtype.save();
  }
}

module.exports = RoomTypeBusiness;
