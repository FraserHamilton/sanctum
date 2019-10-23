var sql = require("mssql");

exports.device_list = function(req, res) {
  // create Request object
  var request = new sql.Request();
  // query to the database and get the records
  request.query(`select * from devices`, function(err, recordset) {
    if (err) console.log(err);
    // send records as a response
    res.json({
      devices: recordset.recordset
    });
  });
};

exports.device_detail = function(req, res) {
  var request = new sql.Request();
  // query to the database and get the records
  request.query(`select * from devices where id = ${req.params.id}`, function(
    err,
    recordset
  ) {
    if (err) console.log(err);
    // send records as a response
    res.json({
      device: recordset.recordset
    });
  });
};

exports.device_toggle = function(req, res) {
  var request = new sql.Request();
  // query to the database and get the records
  request.query(
    `update devices set status = status ^ 1 where id = ${req.params.id}`,
    function(err, recordset) {
      if (err) console.log(err);
      // send records as a response
      res.json({
        response: "success"
      });
    }
  );
};

exports.device_add = function(req, res) {
  var request = new sql.Request();
  console.log(req.body);

  // query to the database and get the records
  request.query(
    `insert into devices (name, status) values ('${req.body.name}', ${req.body.status})`,
    function(err, recordset) {
      if (err) console.log(err);
      // send records as a response
      res.json({
        response: "success"
      });
    }
  );
};

exports.device_remove = function(req, res) {
  var request = new sql.Request();
  // query to the database and get the records
  request.query(`delete from devices where id = ${req.params.id}`, function(
    err,
    recordset
  ) {
    if (err) console.log(err);
    // send records as a response
    res.json({
      response: "success"
    });
  });
};
