import React, { Fragment, useRef, useState } from "react";

// Importing styles
import classes from './blog.module.css'
import Bloglist from "./blogList";

const Blog = () => {

  let blogs = [];

  const titleInput = useRef();
  const titleContent = useRef();
  const [blogList, setBlogList] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userInsertedTitle = titleInput.current.value;
    const userInsertedContent = titleContent.current.value;


    blogs.push(
      {
        id: Math.random(),
        title: userInsertedTitle,
        description: userInsertedContent
      }
    );

    setBlogList(blogs);
    // console.log(blogs)
  }


  return (
    <Fragment>
      <h1>Blog</h1>
      <div className={classes.formContainer}>
        <form onSubmit={formSubmitHandler}>
          <label>Title</label>
          <input type="text" name="title" ref={titleInput} />

          <label>Content</label>
          <input type="text" name="content" ref={titleContent} />

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
