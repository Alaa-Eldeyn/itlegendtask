"use client";

import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import ProgressBar from "./ProgressBar";
import { useGlobalContext } from "@/utils/context";
import { Content } from "@/types/type";

function CourseLessons() {
  const oldContent = localStorage.getItem("content");
  const [openIndex, setOpenIndex] = useState<number>(1);
  const { currentVideo } = useGlobalContext();
  const [content, setContent] = useState<Content[]>([]);
  useEffect(() => {
    setContent(oldContent ? JSON.parse(oldContent) : []);
  }, [oldContent, currentVideo]);
  return (
    <div>
      <h2 className="text-2xl font-bold">Topics for this course</h2>
      <ProgressBar percentage={63} />
      <div className="border">
        {content?.map((item) => (
          <Accordion
            key={item.id}
            index={item.id}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
}
export default CourseLessons;
