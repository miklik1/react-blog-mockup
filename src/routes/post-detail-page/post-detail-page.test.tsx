
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { MyContext } from "../../store/store.tsx";
import PostDetailPage from "./post-detail-page.component.tsx";

// Mocking the store context
const mockContextValue = {
  posts: [
    {
      id: 1,
      title: "Mastering Responsive Typography with CSS",
      author: "Emily Rodriguez",
      likes: 120,
      comments: [
        {
          id: 1,
          author: "John Doe",
          text: "Awesome tips!",
        },
        {
          id: 2,
          author: "Jane Smith",
          text: "Could you cover responsive fonts for mobile devices?",
        },
        {
          id: 3,
          author: "Bob Johnson",
          text: "Thanks for the detailed guide.",
        },
      ],
      content:
        "In this post, we delve into the art of creating responsive typography using CSS. Learn how to ensure your text looks great on screens of all sizes.",
      publishedAt: "2023-01-15T08:30:00Z",
    },
  ],
  updatePostComments: jest.fn(),
  updatePostLikes: jest.fn(), // Add the missing property
  hasUserLikedPost: jest.fn(), // Add the missing property
};

const renderComponent = (postId?: string) =>
  render(
    <MyContext.Provider value={mockContextValue}>
      <MemoryRouter initialEntries={[`/posts/${postId || "1"}`]}>
        <Routes>
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </MemoryRouter>
    </MyContext.Provider>
  );

describe("PostDetailPage Component", () => {
  test("renders post details and comments", () => {
    renderComponent();

    // Check if post details are rendered
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    // Check if comments section is rendered
    expect(screen.getByText("Komentáře")).toBeInTheDocument();
  });

  test("updates comments", () => {
    renderComponent();

    // Mock new comments
    const newComments = [
      { id: 1, author: "John Doe", text: "Great post!" },
      { id: 2, author: "Jane Smith", text: "Very informative." },
    ];

    // Trigger comment update
    act(() => {
      mockContextValue.updatePostComments(1, newComments);
    });

    // Check if the update function is called with the correct arguments
    expect(mockContextValue.updatePostComments).toHaveBeenCalledWith(
      1,
      newComments
    );

    // Check if the comments are rendered
    newComments.forEach((comment) => {
      expect(
        screen.getByText(`${comment.author}: ${comment.text}`)
      ).toBeInTheDocument();
    });
  });

  test("handles invalid post ID", () => {
    renderComponent("invalid-id");

    // Check if the error message for invalid ID is rendered
    expect(screen.getByText("Neplatné ID příspěvku")).toBeInTheDocument();
  });
});
