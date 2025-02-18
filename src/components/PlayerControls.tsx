"use client";
import React, { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Maximize,
  Pause,
  Play,
  Proportions,
  Volume2,
  VibrateOffIcon as VolumeOff,
} from "lucide-react";
import TimeLine from "./TimeLine";
import { useGlobalContext } from "@/utils/context";

interface PlayerControlsProps {
  setVideoPlayer: React.Dispatch<
    React.SetStateAction<{
      isPlaying: boolean;
      muted: boolean;
      played: number;
      seeking: boolean;
    }>
  >;
  videoPlayer: {
    isPlaying: boolean;
    muted: boolean;
    played: number;
    seeking: boolean;
  };
  handleMute: () => void;
  muted: boolean;
  setIsVideoExpanded: (isVideoExpanded: boolean) => void;
  isVideoExpanded: boolean;
  handleFullScreen: () => void;
  played: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSeekMouseDown: () => void;
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
  isVisible: boolean;
}

const PlayerControls: ForwardRefRenderFunction<
  HTMLDivElement,
  PlayerControlsProps
> = (
  {
    setVideoPlayer,
    videoPlayer,
    handleMute,
    muted,
    setIsVideoExpanded,
    isVideoExpanded,
    handleFullScreen,
    onSeek,
    onSeekMouseDown,
    onSeekMouseUp,
    isVisible,
  },
  ref
) => {
  const { currentVideo } = useGlobalContext();

  return (
    <div
      ref={ref}
      className={`absolute inset-0 bg-black/20 flex flex-col justify-between transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-xl px-5 pt-2 h-[80px] font-bold text-white">
        {currentVideo?.includes("youtu.be")
          ? ""
          : currentVideo?.split("/").pop()?.split(".")[0] ?? "No video playing"}
      </div>
      <div
        onClick={() =>
          setVideoPlayer({
            ...videoPlayer,
            isPlaying: !videoPlayer.isPlaying,
          })
        }
        className="p-5 center"
      >
        <button
          aria-label="Play / pause"
          className="bg-white/90 text-black px-5 py-2 size-14 rounded-full center"
        >
          {videoPlayer.isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
      <div className="px-5 lg:pt-3 h-[80px]">
        <TimeLine
          played={videoPlayer.played}
          onSeek={onSeek}
          onSeekMouseDown={onSeekMouseDown}
          onSeekMouseUp={onSeekMouseUp}
        />
        <div className="flex justify-between items-center">
          <div className="text-white flex items-center gap-8">
            {videoPlayer.isPlaying ? (
              <Pause
                className="cursor-pointer"
                onClick={() =>
                  setVideoPlayer({
                    ...videoPlayer,
                    isPlaying: false,
                  })
                }
              />
            ) : (
              <Play
                className="cursor-pointer"
                onClick={() =>
                  setVideoPlayer({
                    ...videoPlayer,
                    isPlaying: true,
                  })
                }
              />
            )}
            {muted ? (
              <VolumeOff className="cursor-pointer" onClick={handleMute} />
            ) : (
              <Volume2 className="cursor-pointer" onClick={handleMute} />
            )}
          </div>
          <div className="text-white flex items-center gap-8">
            <Proportions
              className="cursor-pointer"
              onClick={() => setIsVideoExpanded(!isVideoExpanded)}
            />
            <Maximize onClick={handleFullScreen} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(PlayerControls);
