"use client";
import { useGlobalContext } from "@/utils/context";
import dynamic from "next/dynamic";
import { Suspense, useRef, useState, useEffect, useCallback } from "react";
import LoadingSpinner from "./LoadingSpinner";
import PlayerControls from "./PlayerControls";
import screenfull from "screenfull";
import ReactPlayer from "react-player";
import { VideoPlayerProps } from "@/types/type";

const ReactVideoPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoPlayer({
  isVideoExpanded,
  setIsVideoExpanded,
}: VideoPlayerProps) {
  const { currentVideo, setCurrentVideo } = useGlobalContext();
  const [videoPlayer, setVideoPlayer] = useState({
    isPlaying: false,
    muted: false,
    played: 0,
    seeking: false,
  });
  const [controlsVisible, setControlsVisible] = useState(true);
  const playerRef = useRef<ReactPlayer | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMute = () => {
    setVideoPlayer((prev) => ({ ...prev, muted: !prev.muted }));
  };

  const handleFullScreen = () => {
    if (playerContainerRef.current) {
      screenfull.toggle(playerContainerRef.current);
    }
  };

  const handleProgress = (state: {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }) => {
    if (!videoPlayer.seeking) {
      setVideoPlayer((prevState) => ({
        ...prevState,
        played: state.played,
      }));
      let newContent;
      if (state.played >= 0.8) {
        setCurrentVideo({ ...currentVideo, watched: true });
        const oldContent = localStorage.getItem("content");
        if (oldContent) {
          const parsedContent = JSON.parse(oldContent);
          newContent = parsedContent.map(
            (item: { content: Array<{ id: string; watched: boolean }> }) => {
              item.content = item.content.map(
                (content: { id: string; watched: boolean }) => {
                  if (content.id.toString() === currentVideo.id.toString()) {
                    content.watched = true;
                  }
                  return content;
                }
              );
              return item;
            }
          );
          localStorage.setItem("content", JSON.stringify(newContent));
        }
      }
      if (state.played === 1) {
        const nextVideoIndex = currentVideo.id + 1;
        let nextVideo = newContent[0]?.content[nextVideoIndex];
        if (nextVideo?.type !== "video") {
          nextVideo = newContent[0]?.content[nextVideoIndex + 1];
        }
        if (nextVideo) {
          setCurrentVideo(nextVideo);
          setVideoPlayer((prev) => ({ ...prev, played: 0, isPlaying: true }));
        }
      }
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) / 100;
    setVideoPlayer((prev) => ({ ...prev, played: newValue }));
    if (playerRef.current) {
      playerRef.current.seekTo(newValue);
    }
  };

  const handleSeekMouseDown = () => {
    setVideoPlayer((prev) => ({ ...prev, seeking: true }));
  };

  const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    setVideoPlayer((prev) => ({ ...prev, seeking: false }));
    if (playerRef.current) {
      playerRef.current.seekTo(
        parseFloat((e.target as HTMLInputElement).value) / 100
      );
    }
  };

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (videoPlayer.isPlaying) {
        setControlsVisible(false);
      }
    }, 2000);
  }, [videoPlayer.isPlaying]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMouseMove = () => {
    showControls();
  };

  return (
    <>
      <h1 className="h2">Starting SEO as your Home Based Business</h1>
      <div className="my-5 bg-black rounded-lg overflow-hidden">
        <div
          className={`relative w-full min-h-[200px] lg:h-[400px] lg:w-full ${
            isVideoExpanded ? "lg:h-[600px]" : "lg:h-[400px]"
          }`}
          ref={playerContainerRef}
          onMouseMove={handleMouseMove}
        >
          <Suspense
            fallback={
              <div className="w-full h-full center">
                <LoadingSpinner />
              </div>
            }
          >
            <ReactVideoPlayer
              ref={playerRef}
              url={currentVideo?.url?.toString()}
              width="100%"
              height="100%"
              playing={videoPlayer.isPlaying}
              muted={videoPlayer.muted}
              onProgress={handleProgress}
            />
            <PlayerControls
              ref={controlsRef}
              {...{
                setVideoPlayer,
                videoPlayer,
                handleMute,
                muted: videoPlayer.muted,
                setIsVideoExpanded,
                isVideoExpanded,
                handleFullScreen: handleFullScreen,
                played: videoPlayer.played,
                onSeek: handleSeekChange,
                onSeekMouseDown: handleSeekMouseDown,
                onSeekMouseUp: handleSeekMouseUp,
                isVisible: controlsVisible,
              }}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
