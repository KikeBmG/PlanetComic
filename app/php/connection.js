let launchQuery = dbQuery => {
  const mysql = require('mysql');
  const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd"
  });

  database.connect(err => {
    if (err) throw err;
    database.query(dbQuery, (err, result) => {
      if (err) throw err;
      return result;
    });
  });
}

export default launchQuery(dbQuery);