const { Client } = require("pg");

const client = new Client({
  connectionString: `postgres://my_blogdb_postgresql_user:HnnuDXewyt6ZxprBx5GWe7EM6M9MU4op@dpg-cp87os7109ks738g1pj0-a.oregon-postgres.render.com/my_blogdb_postgresql`,
  ssl: {
    rejectUnauthorized: false,
  },
  // user: "postgres",
  // host: "localhost",
  // database: "blogdb",
  // password: "MahdiManik@0",
  // port: 5432,
});

const createTableQuery = `
 CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    publish_date DATE NOT NULL,
    author_name TEXT NOT NULL,
    blog_image TEXT NOT NULL
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
