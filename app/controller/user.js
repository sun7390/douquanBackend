'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getUser() {
    const { ctx } = this;
    const id = ctx.params.id;
    const user = await ctx.service.user.findById(id);
    ctx.body = `hi,${user.name}`;
  }
}

module.exports = UserController;
