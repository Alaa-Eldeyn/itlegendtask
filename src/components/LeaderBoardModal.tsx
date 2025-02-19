function LeaderBoardModal({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}) {
  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-40 cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed w-[90%] max-w-md mx-auto p-6 bg-white rounded-3xl shadow-lg min-h-[600px]"
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute text-red-500 hover:text-white text-3xl rounded-lg border size-8 border-red-500 soft hover:bg-red-500"
        >
          ×
        </button>
        <div className="text-center mb-6 text-blue-900 ">
          <h1 className="font-medium text-lg mb-1">Course Name Shown Here</h1>
          <h2 className="font-semibold text-xl">Leaderboard</h2>
        </div>

        <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl mb-6 rtl">
          <div className="flex-1">
            <p className="text-right leading-relaxed font-cairo">
              عظيم! ياصديقي.. أداءك فى الكورس ده أفضل من 90٪ من باقي الطلبة..
              كمل عايز أشوف اسمك فى الليدر بورد هنا
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-4xl">🏆</span>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((slot) => (
            <div
              key={slot}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 "
            >
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LeaderBoardModal;
