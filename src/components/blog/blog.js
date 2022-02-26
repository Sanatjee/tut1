import React, { Fragment, useState, useEffect, useCallback } from "react";

import axios from "axios";

// Importing styles
import classes from "./blog.module.css";
import Bloglist from "./blogList";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [blogList, setBlogList] = useState([]);

  const URL =
    "https://react-router-quotes-2022-default-rtdb.asia-southeast1.firebasedatabase.app/blog.json";

  const getBlogs = useCallback(async () => {
    try {
      const response = await axios.get(URL);

      const blogs = [];

      for (const key in response.data) {
        blogs.push({
          id: key,
          title: response.data[key].title,
          description: response.data[key].description,
        });
      }
      setBlogList(blogs);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(URL, {
        id: Math.random(),
        title: title,
        description: content,
      })
      .then(function (response) {
        getBlogs();
        setTitle("");
        setContent("");
      })
      .catch(function (error) {});
  };

  return (
    <Fragment>
      <h1>Blog</h1>
      <div className={classes.formContainer}>
        <form onSubmit={formSubmitHandler}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />

          <label>Content</label>
          <input
            type="text"
            name="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      {blogList &&
        blogList.map((data) => (
          <Bloglist
            key={data.id}
            title={data.title}
            description={data.description}
          />
        ))}
    </Fragment>
  );
};

export default Blog;
