import Link from "next/link";

function GoToPage() {
  return (
    <main className="relative h-dvh">
      <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-5">
        <h1 className="font-bold text-4xl">
          To go directly to the course page
        </h1>
        <h2>( Routing simulation of the system )</h2>
        <Link
          href={"/course/course-details/2"}
          className="px-8 py-3 inline-block bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Click Here
        </Link>
      </div>
    </main>
  );
}
export default GoToPage;
