import { ChevronDown } from "lucide-react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative w-full h-1.5 bg-gray-200 rounded-full mb-12 mt-10">
      <div
        className="absolute top-0 left-0 h-full bg-green-500 rounded-s-full"
        style={{ width: `${percentage}%` }}
      ></div>
      <div
        className={`absolute -top-9 left-0 -translate-x-1/2 text-xs text-blue-600 border-gray-400 size-7 border rounded-full center pt-1`}
        style={{ left: `${percentage}%` }}
      >
        <p>You</p>
      </div>
      <div
        className={`absolute top-1 left-0 size-4 -translate-x-1/2 center text-blue-600`}
        style={{ left: `${percentage}%` }}
      >
        <ChevronDown />
      </div>
      <div
        className={`absolute top-5 left-0 transform -translate-x-1/2 text-blue-600 text-sm rounded px-1`}
        style={{ left: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
