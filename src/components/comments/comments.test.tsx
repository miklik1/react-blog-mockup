import { render, fireEvent, screen, act} from "@testing-library/react";
import "@testing-library/jest-dom"; // for expect(...).toBeInTheDocument()
import Comments from "./comments.component";

describe("Comments Component", () => {
  const postId = 1;
  const comments = [
    { id: 1, author: "John Doe", text: "Great post!" },
    { id: 2, author: "Jane Smith", text: "Very informative." },
  ];

  const updateCommentsMock = jest.fn();

  beforeEach(() => {
    render(
      <Comments
        postId={postId}
        comments={comments}
        updateComments={updateCommentsMock}
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
      },
    ]);
  });

  test("does not add a new comment with empty fields", () => {
    const submitButton = screen.getByText("Submit");
    // Ensure form fields are empty after clicking submit
    const authorInput = screen.getByPlaceholderText(
      "Your Name"
    ) as HTMLInputElement;
    const commentInput = screen.getByPlaceholderText(
      "Add a new comment..."
    ) as HTMLTextAreaElement;

    fireEvent.change(authorInput, { target: { value: "" } });
    fireEvent.change(commentInput, { target: { value: "" } });

    fireEvent.click(submitButton);

    // Use act to wait for the asynchronous operations to complete
    act(() => {
      expect(updateCommentsMock).not.toHaveBeenCalled();
      expect(authorInput.value).toBe("");
      expect(commentInput.value).toBe("");
    });
  });
});
