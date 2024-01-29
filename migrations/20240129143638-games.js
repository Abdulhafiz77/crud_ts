'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
};

exports.up = function(db, callback) {
  db.runSql(`
  CREATE TABLE IF NOT EXISTS game(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    discription VARCHAR(50) NOT NULL,
    version NUMERIC(15) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
  `, function (err) {
    if (err) return callback(err);
    callback();
  });
};

exports.down = function(db, callback) {
  db.runSql(`
  DROP TABLE IF EXISTS game;
  `, function (err) {
if (err) return callback(err);
callback();
});
};

exports._meta = {
  "version": 1
};
