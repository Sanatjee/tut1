import React, { Fragment, useState } from "react";

// Importing styles
import classes from "./blog.module.css";
import Bloglist from "./blogList";

const Blog = () => {
  const blogs = [];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [blogList, setBlogList] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setBlogList((blogs) => [
      ...blogs,
      {
        id: Math.random(),
        title: title,
        description: content,
      },
    ]);
    console.log(blogs);
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
      {blogList.map((data) => (
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
