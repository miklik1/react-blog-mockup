import React, { createContext, ReactNode } from "react";

import posts from "./data.json";

import type BlogPost from "../types/BlogPost";

const MyContext = createContext<BlogPost[] | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const defaultState: BlogPost[] = posts;

  return (
    <MyContext.Provider value={defaultState}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
