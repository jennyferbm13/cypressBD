const { defineConfig } = require("cypress");
const mysql = require("mysql");
function queryTestDB(query) {
  //const connection = mysql.createConnection(config.env.db);

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*******",
    database: "MiDataBase",
  });
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        queryDB: (query) => {
          return queryTestDB(query);
        },
      });
    },
    baseUrl: "http://localhost:3000",
  },
});
