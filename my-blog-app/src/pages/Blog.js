import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';

const Blog = () => {
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.', date: '2024-02-07' },
    // Add more posts as needed
  ]);

  return (
    <div>
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} date={post.date} />
      ))}
    </div>
  );
};

export default Blog;
