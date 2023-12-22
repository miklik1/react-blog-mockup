import React, { useState, useEffect, useCallback } from "react";

import type { Comment } from "../../types/BlogPost";

interface CommentsProps {
  postId: number;
  comments: Comment[];
  updateComments: (postId: number, newComments: Comment[]) => void;
}

const Comments: React.FC<CommentsProps> = ({
  postId,
  comments,
  updateComments,
}) => {
  // Používáme objekt pro uchování stavu, abychom měli jedno místo pro sledování stavu formuláře.
  const [formData, setFormData] = useState({
    authorName: localStorage.getItem("username") || "",
    newComment: localStorage.getItem(`newComment${postId}`) || "",
  });

  // Funkce pro změnu stavu při změně hodnoty v poli formuláře.
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funkce pro přidání komentáře
  const handleAddComment = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault(); // Zabraňuje výchozímu chování formuláře
      const { authorName, newComment } = formData;

      if (
        !postId ||
        !updateComments ||
        newComment.trim() === "" ||
        !authorName.trim()
      ) {
        return;
      }

      const newCommentObject: Comment = {
        id: comments.length + 1,
        author: authorName,
        text: newComment,
      };

      setFormData({ authorName: "", newComment: "" }); // Vynulování stavu po přidání komentáře
      updateComments(postId, [...comments, newCommentObject]);

      localStorage.removeItem(`newComment${postId}`);
    },
    [postId, formData, comments, updateComments]
  );

  // Efekt pro ukládání hodnot do localStorage
  useEffect(() => {
    localStorage.setItem(`newComment${postId}`, formData.newComment);
    localStorage.setItem("username", formData.authorName);
  }, [formData, postId]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}:</strong> {comment.text}
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddComment}>
        <input
          type="text"
          name="authorName"
          value={formData.authorName}
          onChange={handleInputChange}
          placeholder="Your Name"
        />

        <textarea
          name="newComment"
          value={formData.newComment}
          onChange={handleInputChange}
          placeholder="Add a new comment..."
          rows={4}
          cols={50}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
