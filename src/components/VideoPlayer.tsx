"use client";
import { useGlobalContext } from "@/utils/context";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps {
  isVideoExpanded: boolean;
  setIsVideoExpanded: (isVideoExpanded: boolean) => void;
}

function VideoPlayer({
  isVideoExpanded,
  setIsVideoExpanded,
}: VideoPlayerProps) {
  const { currentVideo } = useGlobalContext();
  return (
    <>
      <h1 onClick={() => setIsVideoExpanded(!isVideoExpanded)} className="h2">
        Starting SEO as your Home Based Business
      </h1>
      <div className="my-5 bg-gray-100 rounded-lg overflow-hidden ">
        <div
          className={`relative w-full min-h-[250px] lg:h-[400px] lg:w-full ${
            isVideoExpanded ? "lg:h-[600px]" : "lg:h-[400px]"
          }`}
        >
          <Suspense fallback={<div className="w-full h-full center">Loading...</div>}>
            <ReactPlayer
              url={currentVideo?.toString()}
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              muted={true}
              
            />
            {/* <div className="absolute inset-0 bg-black/20 flex flex-col justify-between ">
              <div className="h-[80px] bg-red-500">1</div>
              <div className="h-full bg-green-400">2</div>
              <div className="h-[80px] bg-blue-400">3</div>
            </div> */}
          </Suspense>
        </div>
      </div>
    </>
  );
}
export default VideoPlayer;
