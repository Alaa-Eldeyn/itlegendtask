"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import ProgressBar from "./ProgressBar";
import { content } from "@/data/data";



function CourseLessons() {
  const [openIndex, setOpenIndex] = useState<number>(1);
  return (
    <div>
      <h2 className="text-2xl font-bold">Topics for this course</h2>
      <ProgressBar percentage={63} />
      <div className="border">
        {content.map((item) => (
          <Accordion
            key={item.id}
            index={item.id}
            title={item.title}
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
