import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comments from "./comments.component";

describe("Comments Component", () => {
  const postId = 1;
  const comments = [
    { id: 1, author: "John Doe", text: "Great post!", replies: [] },
    { id: 2, author: "Jane Smith", text: "Very informative.", replies: [] },
  ];

  const updateCommentsMock = jest.fn();
  const handleCommentsMock = jest.fn();

  beforeEach(() => {
    render(
      <Comments
        postId={postId}
        comments={comments}
        updateComments={updateCommentsMock}
        showComments={false}
        handleComments={handleCommentsMock}
      />
    );
  });

  test("renders comments", () => {
    comments.forEach((comment) => {
      const authorQuery = screen.getByText(comment.author);
      const textQuery = screen.getByText(comment.text);

      expect(authorQuery).toBeInTheDocument();
      expect(textQuery).toBeInTheDocument();
    });
  });

  test("adds a new comment", () => {
    const authorInput = screen.getByPlaceholderText("Your Name");
    const commentInput = screen.getByPlaceholderText("Add a new comment...");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(authorInput, { target: { value: "New User" } });
    fireEvent.change(commentInput, {
      target: { value: "This is a new comment." },
    });

    fireEvent.click(submitButton);

    expect(updateCommentsMock).toHaveBeenCalledWith(postId, [
      ...comments,
      {
        id: expect.any(Number),
        author: "New User",
        text: "This is a new comment.",
        replies: [],
      },
    ]);
  });
});
