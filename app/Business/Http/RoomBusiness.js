"use strict";

const Room = use("App/Models/Room");

class RoomBusiness {
  static async GetAll() {
    const rooms = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("IsActived", true)
      .fetch();

    return rooms;
  }

  static async Create(request) {
    const data = request.only(["RoomTypeId", "ScreenId", "Name", "IsActived"]);
    const room = await Room.create(data);

    return room;
  }

  static async GetById(id) {
    const room = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("id", id)
      .fetch();

    return room;
  }

  static async Update(id, request) {
    const room = await Room.findOrFail(id);
    const data = request.only(["RoomTypeId", "ScreenId", "Name", "IsActived"]);

    room.merge(data);
    await room.save();

    return room;
  }

  static async Delete(id) {
    const room = await Room.findOrFail(id);

    room.IsActived = false;

    await room.save();
  }
}

module.exports = RoomBusiness;
