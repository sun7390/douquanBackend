'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ArticleController extends Controller {
  async create() {
    const ctx = this.ctx;
    const { topic, title, count, comment } = ctx.request.body;
    const user = await ctx.model.Articles.create({ topic, title, count, comment });
    ctx.status = 201;
    ctx.body = user;
  }
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.Articles.findAll(query);
  }
}

module.exports = ArticleController;
