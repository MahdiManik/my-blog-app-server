const client = require("../index");
const { v4: uuidv4 } = require("uuid");

const createBlog = async (
  title,
  description,
  publish_date,
  author_name,
  blog_image,
  total_likes
) => {
  const id = uuidv4();
  const res = await client.query(
    "INSERT INTO blogs (id, title, description, publish_date, author_name, blog_image, total_likes) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [id, title, description, publish_date, author_name, blog_image, total_likes]
  );
  return res.rows[0];
};

const getAllBlogs = async () => {
  const res = await client.query("SELECT * FROM blogs");
  return res.rows;
};

const getBlogById = async (id) => {
  const res = await client.query("SELECT * FROM blogs WHERE id = $1", [id]);
  return res.rows[0];
};

const updateBlog = async (
  id,
  title,
  description,
  publish_date,
  author_name,
  blog_image,
  total_likes
) => {
  const res = await client.query(
    "UPDATE blogs SET title = $1, description = $2, publish_date = $3, author_name = $4, blog_image = $5, total_likes = $6 WHERE id = $7 RETURNING *",
    [title, description, publish_date, author_name, blog_image, total_likes, id]
  );
  return res.rows[0];
};

const deleteBlog = async (id) => {
  const res = await client.query(
    "DELETE FROM blogs WHERE id = $1 RETURNING *",
    [id]
  );
  return res.rows[0];
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
