import React, { useState, useEffect } from 'react';
import BlogPostReaction from '../components/BlogPostReactions'; // Adjust the import path as necessary
import "../App.css"

const Blog = () => {
  // Initialize posts as an empty array
  const [posts, setPosts] = useState([]);

  // Example fetching posts (adjust based on your actual data fetching logic)
  useEffect(() => {
    const fetchPosts = async () => {
      // Fetch posts from an API or other source
      // This is just a placeholder; you'll need to replace it with your actual fetch logic
      const fetchedPosts = [
        // Example posts structure
        { id: 1, title: "Post 1", content: "This is the first post", likes: 0, comments: [] },
        { id: 2, title: "Post 2", content: "This is the second post", likes: 0, comments: [] }
      ];
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    
    <div className="blog-post-container">
      {/* Only attempt to map over posts if it's an array */}
      {Array.isArray(posts) && posts.map((post) => (
        <BlogPostReaction key={post.id} post={post} />
      ))}
    </div>
    
  );
};

export default Blog;
