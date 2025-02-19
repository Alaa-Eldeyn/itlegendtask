"use client";
import { content } from "@/data/data";
import { ContentItem } from "@/types/type";
import { createContext, useContext, useEffect, useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */

export const Context = createContext({
  currentVideo: content[0]?.content[0],
  setCurrentVideo: (item) => {},
});

export const Provider = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState(content[0]?.content[0]);

  useEffect(() => {
    const storedContent = localStorage.getItem("data");
    if (storedContent) {
      const parsedContent = JSON.parse(storedContent);
      setCurrentVideo(parsedContent[0]?.content[0]);
    } else {
      localStorage.setItem("data", JSON.stringify(content));
    }
  }, []);

  return (
    <Context.Provider
      value={{
        currentVideo,
        setCurrentVideo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};
