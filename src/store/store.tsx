import React, { createContext, ReactNode, useState, useEffect } from "react";
import posts from "./data.json";
import type { BlogPost, Comment } from "../types/BlogPost";

// Definice typu pro kontext
interface MyContextType {
  posts: BlogPost[];
  updatePostLikes: (postId: number) => void;
  updatePostComments: (postId: number, newComments: Comment[]) => void;
  hasUserLikedPost: (postId: number) => boolean;
}

// Vytvoření kontextu s výchozí hodnotou undefined
const MyContext = createContext<MyContextType | undefined>(undefined);

// Props pro MyContextProvider
interface MyContextProviderProps {
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  // Načtení příspěvků ze stavu nebo z localStorage
  const [postsData, setPostsData] = useState<BlogPost[]>(() => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : posts;
  });

  // Funkce pro kontrolu, zda uživatel již dal like konkrétnímu příspěvku
  const hasUserLikedPost = (postId: number): boolean => {
    const likedPosts = localStorage.getItem("likedPosts") || "";
    return likedPosts.includes(postId.toString());
  };

  // Funkce pro aktualizaci počtu likes u příspěvku
  const updatePostLikes = (postId: number) => {
    // Kontrola, zda uživatel již dal like
    if (hasUserLikedPost(postId)) {
      console.log("Uživatel již dal like tomuto příspěvku!");
      return;
    }

    // Aktualizace stavu příspěvků a localStorage pro uložení like
    setPostsData((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );

    const likedPosts = localStorage.getItem("likedPosts") || "";
    localStorage.setItem("likedPosts", `${likedPosts + postId  },`);
  };

  // Funkce pro aktualizaci komentářů u příspěvku
  const updatePostComments = (postId: number, newComments: Comment[]) => {
    setPostsData((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: newComments } : post
      )
    );
  };

  // Efekt pro uložení stavu příspěvků do localStorage
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postsData));
  }, [postsData]);

  // Vytvoření hodnoty pro kontext
  const contextValue: MyContextType = {
    posts: postsData,
    updatePostLikes,
    updatePostComments,
    hasUserLikedPost,
  };

  // Poskytnutí hodnoty kontextu dětem
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Export kontextu a poskytovatele kontextu
export { MyContext, MyContextProvider };
