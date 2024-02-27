// Example code snippet for handling likes and comments in a React component

import React, { useState } from 'react';


const BlogPostReaction = ({ post }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [showComments, setShowComments] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    return (
        <div className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="like-comment-section">
                <button className="like-button" onClick={handleLike}>Like ({likes})</button>
                <button className="comment-button" onClick={() => setShowComments(!showComments)}>Comment</button>
            </div>
            {showComments && (
                <div className="comment-section active">
                    <form onSubmit={handleCommentSubmit}>
                        <input 
                            type="text" 
                            className="comment-input" 
                            value={commentText} 
                            onChange={(e) => setCommentText(e.target.value)} 
                            placeholder="Write a comment..."
                        />
                    </form>
                    <ul className="comments-list">
                        {comments.map((comment, index) => (
                            <li key={index} className="comment-item">{comment}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BlogPostReaction;
