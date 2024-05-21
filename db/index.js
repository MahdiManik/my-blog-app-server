const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "blogdb",
  password: "MahdiManik@0",
  port: 5432,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS blogDB (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    publish_date DATE NOT NULL,
    author_name TEXT NOT NULL,
    blog_image TEXT NOT NULL,
    total_likes INTEGER NOT NULL
  );
`;

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
    return client.query(createTableQuery);
  })
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((err) => {
    console.error("Error creating table", err.stack);
  });
// .finally(() => {
//   client.end();
// });

module.exports = client;
