function TimeLine({
  played,
  onSeek,
  onSeekMouseDown,
  onSeekMouseUp,
}: {
  played: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSeekMouseDown: () => void;
  onSeekMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative w-full  mb-5">
      <div className="h-2 bg-gray-300 rounded-full relative">
        <div
          className="h-2 bg-sky-500 rounded-full absolute top-0 left-0"
          style={{ width: `${played * 100}%` }}
        />
      </div>
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: `${played * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-4 h-4 bg-white border-2 border-sky-500 rounded-full shadow-md cursor-pointer" />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={played * 100}
        onChange={onSeek}
        onMouseDown={onSeekMouseDown}
        onMouseUp={onSeekMouseUp}
        className="w-full opacity-0 absolute top-0 left-0 h-2 cursor-pointer"
        aria-label="Seek"
      />
    </div>
  );
}
export default TimeLine;
