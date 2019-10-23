var sql = require("mssql");

exports.user_list = function(req, res) {
  // create Request object
  var request = new sql.Request();
  // query to the database and get the records
  request.query(`select * from users`, function(err, recordset) {
    if (err) console.log(err);
    // send records as a response
    res.json({
      users: recordset.recordset
    });
  });
};

// exports.user_detail = function(req, res) {
//   var request = new sql.Request();
//   // query to the database and get the records
//   request.query(`select * from users where id = ${req.params.id}`, function(
//     err,
//     recordset
//   ) {
//     if (err) console.log(err);
//     // send records as a response

//     var request2 = new sql.Request();
//     // query to the database and get the records
//     request2.query(
//       `select * from bikes where stationID = ${req.params.id}`,
//       function(err, recordset2) {
//         if (err) console.log(err);
//         // send records as a response
//         res.json({
//           station: recordset.recordset,
//           bikes: recordset2.recordset
//         });
//       }
//     );
//   });
// };
