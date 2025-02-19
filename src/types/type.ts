export interface Question {
  id: number;
  question: string;
  options: string[];
}

export interface ContentItem {
  id: number;
  title: string;
  type: string;
  url?: string;
  watched: boolean;
  duration?: number;
  question?: number;
  questions?: Question[];
}

export interface Content {
  id: number;
  title: string;
  subtitle: string;
  content: ContentItem[];
}

export interface PlayerControlsProps {
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

export interface VideoPlayerProps {
  isVideoExpanded: boolean;
  setIsVideoExpanded: (isVideoExpanded: boolean) => void;
}

export interface accordionProps {
  title: string;
  subtitle: string;
  content: ContentItem[];
  index: number;
  openIndex: number;
  setOpenIndex: React.Dispatch<React.SetStateAction<number>>;
}
