"use client";
import Link from "next/link";
import { FileUser, MessageCircleMore } from "lucide-react";
import AskQuestion from "./AskQuestion";
import LeaderBoard from "./LeaderBoard";

function Interactions() {
  return (
    <div className=" mb-5 flex items-center gap-5">
      <LeaderBoard />
      <Link
        href={"#comments"}
        title={"Comments"}
        className="rounded-full center size-10 border text-gray-500 hover:text-gray-900 hover:bg-gray-100 soft"
      >
        <MessageCircleMore />
      </Link>
      <AskQuestion />
      <Link
        href={"#curriculum"}
        title={"Curriculum"}
        className="rounded-full center size-10 border text-gray-500 hover:text-gray-900 hover:bg-gray-100 soft"
      >
        <FileUser />
      </Link>
    </div>
  );
}
export default Interactions;
