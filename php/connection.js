let launchQuery = dbQuery => {
  const mysql = require('mysql');
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd"
  });

  db.connect(err => {
    if (err) throw err;
    db.query(dbQuery, (err, result) => {
      if (err) throw err;
      return result;
    });
  });
}

export default launchQuery(dbQuery);