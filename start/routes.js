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
  Route.resource("/screens", "ScreenController").apiOnly();

  Route.resource("/roomtypes", "RoomTypeController").apiOnly();

  Route.resource("/rooms", "RoomController").apiOnly();

  Route.resource("/films", "FilmController").apiOnly();
  Route.get(
    "/films/pagination/:page/:limitPage",
    "FilmController.indexPagination"
  );
  Route.get("/films/apiCode/:apiCode", "FilmController.showByApiCode");

  Route.resource("/schedules", "ScheduleController").apiOnly();

  Route.resource("/exhibitions", "ExhibitionController").apiOnly();
  Route.get(
    "/exhibition/pagination/:page/:limitPage",
    "ExhibitionController.indexPagination"
  );
});

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
