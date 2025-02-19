"use client";
import { useGlobalContext } from "@/utils/context";
import { Check, LockKeyhole, NotepadText } from "lucide-react";
import { useState } from "react";
import PDFModal from "./PDFModal";
import TestModal from "./TestModal";
import { accordionProps, ContentItem } from "@/types/type";

const Accordion = ({
  title,
  subtitle,
  content,
  index,
  openIndex,
  setOpenIndex,
}: accordionProps) => {
  const isOpen = openIndex === index;
  const { setCurrentVideo } = useGlobalContext();
  const [pdfOpen, setPDFOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState<ContentItem | null>(null);
  const [testOpen, setTestOpen] = useState(false);
  const [testData, setTestData] = useState<ContentItem | null>(null);

  const handleNextClick = (item: ContentItem): void => {
    switch (item.type) {
      case "pdf":
        setPdfFile(item);
        setPDFOpen(true);
        break;
      case "test":
        setTestData(item);
        setTestOpen(true);
        break;
      case "video":
        setCurrentVideo({
          ...item,
          url: item.url || "",
          watched: item.watched ?? false,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className={`soft w-full relative border-b`}>
      {pdfOpen && <PDFModal pdfFile={pdfFile} setOpen={setPDFOpen} />}
      {testOpen && <TestModal testData={testData} setOpen={setTestOpen} />}
      <button
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
        className="flex justify-between items-center gap-5 w-full p-5 rounded-3xl text-start outline-none"
      >
        <div>
          <p className="font-bold text-lg">{title}</p>
          <span className="text-sm text-gray-700">{subtitle}</span>
        </div>
        <div>
          <svg
            className={`!size-10 max-w-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden text-start soft ${
          isOpen ? "max-h-[900px] " : "max-h-0"
        }`}
      >
        <div className={`p-5 !pt-0`}>
          {content.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 soft hover:bg-gray-50 cursor-pointer p-3 rounded-lg"
                onClick={() => handleNextClick(item)}
              >
                <div className="flex items-center gap-2">
                  <NotepadText className="size-4 text-gray-500" />
                  <p className="pt-1">{item.title}</p>
                </div>
                <div>
                  {item.type === "pdf" ? (
                    <div className="flex items-center gap-2">
                      <p className="bg-green-50 text-center text-green-500 py-1 px-2 rounded-lg text-sm">{`${item.question} Questions`}</p>
                      <p className="bg-red-50 text-center text-red-500 py-1 px-2 rounded-lg text-sm">{`${item.duration} min`}</p>
                    </div>
                  ) : item.watched ? (
                    <Check className="bg-green-500 text-white rounded-lg   size-5" />
                  ) : (
                    <LockKeyhole className="size-4 text-gray-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
