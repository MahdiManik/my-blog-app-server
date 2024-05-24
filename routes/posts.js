const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../db/models/post");

// all blogs read operation
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// specific blog read operation with id
router.get("/blog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await getBlogById(id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// a blog create operation
router.post("/create-blog", async (req, res) => {
  const { title, description, publish_date, author_name, blog_image } =
    req.body;
  try {
    const newBlog = await createBlog(
      title,
      description,
      publish_date,
      author_name,
      blog_image
    );
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// specific blog update operation
router.put("/update-blog/:id", async (req, res) => {
  const { title, description, publish_date, author_name, blog_image } =
    req.body;

  // console.log(req.body);
  try {
    const updatedBlog = await updateBlog(
      req.params.id,
      title,
      description,
      publish_date,
      author_name,
      blog_image
    );
    if (updatedBlog) {
      res.json(updatedBlog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// specific blog delete operation
router.delete("/delete-blog/:id", async (req, res) => {
  try {
    const deletedBlog = await deleteBlog(req.params.id);
    if (deletedBlog) {
      res.status(200).json(deletedBlog);
    } else {
      res.status(404).json({ error: "Blog not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
