"use strict";

const Room = use("App/Models/Room");
const Exhibition = use("App/Business/Http/ExbihitionBusiness");

class RoomBusiness {
  static async GetAll() {
    const rooms = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("IsActived", true)
      .fetch();

    return rooms;
  }

  static async GetAllPagination(page, limitPage) {
    const rooms = await Room.query()
      .with("roomtype")
      .with("screen")
      .where("IsActived", true)
      .paginate(page, limitPage);

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

    if (await room.save()) {
      await Exhibition.DeleteByRoom(id);
    }
  }

  static async DeleteByRoomType(roomTypeId) {
    const room = await Room.findByOrFail("RoomTypeId", roomTypeId);

    room.IsActived = false;

    if (await room.save()) {
      await Exhibition.DeleteByRoom(room.id);
    }
  }

  static async DeleteByScreen(screenId) {
    const room = await Room.findByOrFail("ScreenId", screenId);

    room.IsActived = false;

    if (await room.save()) {
      await Exhibition.DeleteByScreen(room.id);
    }
  }
}

module.exports = RoomBusiness;
