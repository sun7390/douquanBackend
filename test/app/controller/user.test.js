'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/app/controller/user.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });
  it('should be get', () => {
    const ctx = app.mockContext();
    assert(ctx.method === 'GET');
  });
  it('user/:id', async () => {
    await app.httpRequest()
      .get('/user/1')
      .expect('hi,sunyang')
      .expect(200);
  });
});
