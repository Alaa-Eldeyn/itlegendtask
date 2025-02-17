"use client";
import { content } from "@/data/data";
import { createContext, useContext, useState } from "react";

interface ContextType {
  currentVideo: string | null;
  setCurrentVideo: (video: string) => void;
}

export const Context = createContext<ContextType>({
  currentVideo: "",
  setCurrentVideo: () => {},
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(
    content[0]?.content[0]?.url ?? null
  );

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
