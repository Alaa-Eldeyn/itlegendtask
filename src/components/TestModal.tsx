import { useEffect, useState } from "react";
import { ContentItem } from "./Accordion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, Clock, X } from "lucide-react";

function TestModal({
  testData,
  setOpen,
}: {
  testData: ContentItem | null;
  setOpen: (open: boolean) => void;
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [timeLeft, setTimeLeft] = useState(500);
  const questions = testData?.questions || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionId]: answer,
    }));
  };

  const goToQuestion = (questionId: number) => {
    if (questionId >= 1 && questionId <= questions.length) {
      setCurrentQuestionId(questionId);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToQuestion(currentQuestionId + 1),
    onSwipedRight: () => goToQuestion(currentQuestionId - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-indigo-500 to-indigo-600 p-4 rounded-3xl w-[90%] max-w-lg max-h-[90vh] flex flex-col">
        <button
          onClick={() => setOpen(false)}
          className="absolute text-white p-2 bg-indigo-600 hover:bg-indigo-400 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="mx-auto bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-medium flex items-center gap-1 shadow-lg">
          <Clock className="w-4 h-4" />
          {formatTime(timeLeft)}
        </div>

        {/* Question numbers navigation */}
        <div className="flex justify-center gap-4 my-6">
          {questions.map((question) => (
            <button
              key={question.id}
              onClick={() => goToQuestion(question.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all
                ${
                  question.id === currentQuestionId
                    ? "bg-white text-indigo-600 border-white"
                    : selectedAnswers[question.id]
                    ? "bg-indigo-400 border-white text-white"
                    : "border-white/50 text-white hover:border-white"
                }`}
            >
              {question.id}
            </button>
          ))}
        </div>

        {/* Questions Carousel with react-swipeable */}
        <div className="relative flex-grow flex items-center" {...handlers}>
          <button
            onClick={() => goToQuestion(currentQuestionId - 1)}
            className="absolute left-0 z-10 text-white p-2 hover:bg-indigo-400 rounded-full transition-colors"
            disabled={currentQuestionId === 1}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentQuestionId - 1) * 100}%)`,
              }}
            >
              {questions.map((question) => (
                <div key={question.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl p-6 shadow-xl mx-4">
                    <div className="mb-6">
                      <div className="text-lg font-medium mb-1">
                        {question.id}.
                      </div>
                      <div className="text-gray-800 text-lg">
                        {question.question}
                      </div>
                    </div>
                    <div className="space-y-3">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleAnswerSelect(option)}
                          className={`w-full text-left p-4 rounded-xl transition-all
                            ${
                              option === selectedAnswers[question.id]
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => goToQuestion(currentQuestionId + 1)}
            className="absolute right-0 z-10 text-white p-2 hover:bg-indigo-400 rounded-full transition-colors"
            disabled={currentQuestionId === questions.length}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TestModal;
