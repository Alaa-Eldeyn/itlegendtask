"use client";
import { content } from "@/data/data";
import { ContextType } from "@/types/type";
import { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext<ContextType>({
  currentVideo: {
    id: 0,
    title: "",
    type: "",
    url: "",
    watched: false,
  },
  setCurrentVideo: () => {},
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState<{
    id: number;
    title: string;
    type: string;
    url: string;
    watched: boolean;
  }>({
    id: 0,
    title: "",
    type: "",
    url: "",
    watched: false,
  });

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
