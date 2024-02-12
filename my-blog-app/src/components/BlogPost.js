import React from 'react';

const BlogPost = ({ title, content, date }) => {
  return (
    <article className="blogPost">
      <h2>{title}</h2>
      <p className="postDate">{date}</p>
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
