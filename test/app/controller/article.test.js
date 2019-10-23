'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/article.test.js', () => {
  const data = {
    title: 'Spring Boot2 系列教程(十四)CORS 解决跨域问题',
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
});
