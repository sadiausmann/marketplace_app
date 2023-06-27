import React, { useState, useEffect } from "react";


function CommentSection({ user , productId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    getProductList();
  }, []);

  function getProductList() {
    fetch("/api/COMMENTS")
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
      user: {user}
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
      <h2>Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;