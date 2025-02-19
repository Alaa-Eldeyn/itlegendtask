"use client";

import { ShieldEllipsis } from "lucide-react";
import { useState } from "react";
import LeaderBoardModal from "./LeaderBoardModal";

function LeaderBoard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      {isModalOpen && <LeaderBoardModal setIsModalOpen={setIsModalOpen} />}
      <div
        title={"LeaderBoard"}
        className="rounded-full center size-10 border text-gray-500 hover:text-gray-900 hover:bg-gray-100 soft"
        onClick={() => setIsModalOpen(true)}
      >
        <ShieldEllipsis />
      </div>
    </>
  );
}
export default LeaderBoard;
