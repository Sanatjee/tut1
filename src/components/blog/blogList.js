import React from 'react';

// Import Styles
import classes from './blogList.module.css'

const Bloglist = (props) => {
    return (
        <div className={classes.blogListContainer}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Bloglist;
