import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { MyContext } from "../../store/store.tsx";
import PostDetailPage from "./post-detail-page.component.tsx";

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
  updatePostLikes: jest.fn(),
  hasUserLikedPost: jest.fn(),
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
  test("handles invalid post ID", () => {
    renderComponent("invalid-id");

    expect(screen.getByText("Non valid ID")).toBeInTheDocument();
  });
});
