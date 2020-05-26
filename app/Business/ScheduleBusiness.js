"use strict";

const Schedule = use("App/Models/Schedule");
const Exhibition = use("App/Business/ExhibitionBusiness");

class ScheduleBusiness {
  static async GetAll() {
    const schedules = await Schedule.query().where("IsActived", true).fetch();

    return schedules;
  }

  static async GetAllPagination(page, limitPage) {
    const schedules = await Schedule.query()
      .where("IsActived", true)
      .paginate(page, limitPage);

    return schedules;
  }

  static async Create(request) {
    const data = request.only(["Description", "IsActived"]);
    const schedule = await Schedule.create(data);

    return schedule;
  }

  static async GetById(id) {
    const schedule = await Schedule.findOrFail(id);

    return schedule;
  }

  static async Update(id, request) {
    const schedule = await Schedule.findOrFail(id);
    const data = request.only(["Description", "IsActived"]);

    schedule.merge(data);
    await schedule.save();

    return schedule;
  }

  static async Delete(id) {
    const schedule = await Schedule.findOrFail(id);

    schedule.IsActived = false;

    if (await schedule.save()) {
      await Exhibition.DeleteBySchedule(id);
    }
  }
}

module.exports = ScheduleBusiness;
