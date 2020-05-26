"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  //#region [Screens]
  Route.resource("/screens", "ScreenController").apiOnly().middleware(["auth"]);

  Route.get(
    "/screens/pagination/:page/:limitPage",
    "ScreenController.indexPagination"
  ).middleware(["auth"]);
  //#endregion

  //#region [Room Types]
  Route.resource("/roomtypes", "RoomTypeController")
    .apiOnly()
    .middleware(["auth"]);

  Route.get(
    "/roomtypes/pagination/:page/:limitPage",
    "RoomTypeController.indexPagination"
  ).middleware(["auth"]);
  //#endregion

  //#region [Rooms]
  Route.resource("/rooms", "RoomController").apiOnly().middleware(["auth"]);

  Route.get(
    "/rooms/pagination/:page/:limitPage",
    "RoomController.indexPagination"
  ).middleware(["auth"]);
  //#endregion

  //#region [Films]
  Route.resource("/films", "FilmController").apiOnly().middleware(["auth"]);

  Route.get(
    "/films/pagination/:page/:limitPage",
    "FilmController.indexPagination"
  ).middleware(["auth"]);

  Route.get(
    "/films/apiCode/:apiCode",
    "FilmController.showByApiCode"
  ).middleware(["auth"]);
  //#endregion

  //#region [Schedules]
  Route.resource("/schedules", "ScheduleController")
    .apiOnly()
    .middleware(["auth"]);

  Route.get(
    "/schedules/pagination/:page/:limitPage",
    "ScheduleController.indexPagination"
  ).middleware(["auth"]);
  //#endregion

  //#region [Exhibitions]
  Route.resource("/exhibitions", "ExhibitionController")
    .apiOnly()
    .middleware(["auth"]);

  Route.get(
    "/exhibitions/pagination/:page/:limitPage",
    "ExhibitionController.indexPagination"
  ).middleware(["auth"]);
  //#endregion

  //#region [Historic Types]
  Route.resource("/historicTypes", "HistoricTypeController")
    .apiOnly()
    .middleware(["auth"]);
  //#endregion

  //#region [Historics]
  Route.resource("/historics", "HistoricController")
    .apiOnly()
    .middleware(["auth"]);

  Route.get(
    "/historics/pagination/:page/:limitPage",
    "HistoricController.indexPagination"
  ).middleware(["auth"]);

  Route.get(
    "/historics/userName/:userName",
    "HistoricController.showByUserName"
  ).middleware(["auth"]);

  Route.get(
    "/historics/tableName/:tableName",
    "HistoricController.showByTableName"
  ).middleware(["auth"]);

  Route.get(
    "/historics/tableKey/:tableKey",
    "HistoricController.showByTableKey"
  ).middleware(["auth"]);
  //#endregion

  //#region [Users]
  Route.post("/users", "UserController.store");

  Route.post("/users/authentication", "UserController.authentication");
  //#endregion
}).prefix("api");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
