'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/article.test.js', () => {
  const data = {
    title: 'CORS 解决跨域问题',
    topic: 'Spring Boot',
    count: 67,
    comment: 17,
  };
  it('article create', async () => {
    await app.httpRequest()
      .post('/article/create')
      .send(data)
      .expect(201)
      .expect(data);
  });
  it('article index', async () => {
    await app.httpRequest()
      .get('/article/index')
      .query({ limit: 10 })
      .expect(200, [{ id: 1, topic: 'Spring Boot', title: 'Spring Boot2 系列教程', count: 67, comment: 17, timestamp: '2017-12-31T16:00:01.000Z' }]);
  });

});
