import React from "react";
import { ContentItem } from "./Accordion";

const PDFModal = ({
  pdfFile,
  setOpen,
}: {
  pdfFile: ContentItem | null;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-40 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fade-in z-50 rounded-lg shadow-lg w-[90%] max-w-4xl p-5 transform transition-all duration-300 scale-100 opacity-100"
      >
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{pdfFile?.title}</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-red-500 hover:text-white text-3xl rounded-lg border size-8 border-red-500 soft hover:bg-red-500"
          >
            ×
          </button>
        </div>

        <div className="p-4">
          <iframe
            src={pdfFile?.url}
            className="w-full h-[80vh] max-h-[600px] rounded-lg border z-50"
          />
          {/* <object data={pdfFile?.url} width="100%" height="100%">
            <p>
              Your device may not support inline PDF viewing. Please use the
              button below to open the PDF.{" "}
              <button
                onClick={() => window.open(pdfFile?.url, "_blank")}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg"
              >
                Open PDF
              </button>
            </p>
          </object> */}
        </div>
      </div>
    </div>
  );
};

export default PDFModal;
