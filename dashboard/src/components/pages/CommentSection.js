import React, { useState, useEffect } from "react";


function CommentSection({ user , productId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  // console.log({user})
  useEffect(() => {
    getComments();
  }, []);

  function getComments() {
    fetch(`/api/comments?productId=${productId}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log (res))
        setComments(res);
      });
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      comment: newComment,
      productId: productId,
      user: comments.user_id
    };
    fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((createdComment) => {
        console.log(createdComment)
        setComments([...comments, createdComment]);
        console.log(comments)
        setNewComment("");
      })
  };

  return (
    <div>
      {/* <h2>Comments</h2> */}
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        />
        <button type="submit">Post Comment</button>
      </form>
      
    </div>
  );
}

export default CommentSection;


{/* <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            {/* //I want to implement logic that each product have its own comments// */}
        