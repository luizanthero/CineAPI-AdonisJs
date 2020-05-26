"use strict";

const User = use("App/Models/User");

class UserBusiness {
  static async Create(request) {
    const data = request.only(["Username", "Email", "Password"]);

    const user = await User.create(data);

    return user;
  }

  static async GetToken(request, auth) {
    const { Username, Password } = request.all();

    const token = await auth.attempt(Username, Password);

    return token;
  }
}

module.exports = UserBusiness;
