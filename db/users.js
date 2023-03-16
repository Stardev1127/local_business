const MongoUtils = require("./MongoUtils.js");
const mu = MongoUtils();

let records = [];

mu.connect()
  .then(mu.getDocuments)
  .then((users) => {
    records = users;
  });

const refreshUsers = () => {
  mu.connect()
    .then(mu.getDocuments)
    .then((users) => {
      records = users;
    });
};

exports.findByUsername = function (username, cb) {
  refreshUsers();
  process.nextTick(function () {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};

exports.addUser = function (pUsername, pPassword) {
  process.nextTick(function () {;
    mu.connect().then((client) =>
      mu.insertDocument(client, pUsername, pPassword)
    );
  });
};
