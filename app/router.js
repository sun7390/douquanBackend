'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.getUser);
  router.post('/article/create', controller.articles.create);
  router.get('/article/index', controller.articles.index)
};
