export interface ContentItem {
  id: number;
  title: string;
  subtitle: string;
  content: ContentItem[];
  type: string;
  url?: string;
  watched?: boolean;
  questions?: {
    id: number;
    question: string;
    options: string[];
  }[];
  question?: number;
  duration?: number;
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

export interface ContextType {
  currentVideo: {
    id: number;
    title: string;
    type: string;
    url: string;
    watched: boolean;
  };
  setCurrentVideo: React.Dispatch<
    React.SetStateAction<{
      id: number;
      title: string;
      type: string;
      url: string;
      watched: boolean;
    }>
  >;
}