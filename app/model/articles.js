'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Articles = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    topic: STRING(30),
    title: STRING(30),
    count: INTEGER,
    comment: INTEGER,
    timestamp: 'TIMESTAMP',
  });
  return Articles;
};
