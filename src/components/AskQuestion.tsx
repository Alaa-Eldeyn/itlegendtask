"use client";

import { MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

function AskQuestion() {
  const [question, setQuestion] = useState("");
  const handleQuestion = async () => {
    const { value, isDismissed } = await Swal.fire({
      input: "textarea",
      inputLabel: "Ask a Question",
      inputPlaceholder: "Type your question here...",
      inputValue: question,
      inputAttributes: {
        "aria-label": "Type your question here",
      },
      confirmButtonText: "Send",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
      showCancelButton: true,
      didOpen: (modal) => {
        const textarea = modal.querySelector("textarea");
        textarea?.addEventListener("input", (e) => {
          setQuestion((e.target as HTMLTextAreaElement).value);
        });
      },
    });

    if (value && !isDismissed) {
      // Here i can send the question to backend
      Swal.fire("Submitted!", "Your question has been submitted.", "success");
      setQuestion("");
    }
  };

  return (
    <div
      title={"Ask a Question"}
      className="rounded-full center size-10 border text-gray-500 hover:text-gray-900 hover:bg-gray-100 soft"
      onClick={() => handleQuestion()}
    >
      <MessageCircleQuestion />
    </div>
  );
}
export default AskQuestion;
