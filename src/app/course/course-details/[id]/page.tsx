"use client";
import Breadcrumb from "@/components/BreadCrumb";
import Comments from "@/components/Comments";
import CourseLessons from "@/components/CourseLessons";
import CourseMaterials from "@/components/CourseMaterials";
import Interactions from "@/components/Interactions";
import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

function Page() {
  const [isVideoExpanded, setIsVideoExpanded] = useState<boolean>(false);

  return (
    <main className="container py-2 grid grid-cols-12 gap-5 lg:gap-10">
      <section
        className={`col-span-12 ${
          isVideoExpanded ? "lg:!col-span-12" : "lg:!col-span-8"
        }`}
      >
        <Breadcrumb />
        <VideoPlayer
          isVideoExpanded={isVideoExpanded}
          setIsVideoExpanded={setIsVideoExpanded}
        />
        <Interactions />

        {/* lg screen && wide video */}
        {isVideoExpanded ? (
          <div className="grid grid-cols-12 gap-4 lg:gap-10">
            <div className="col-span-12 md:col-span-8">
              <CourseMaterials />
              <Comments />
            </div>
            <div id="curriculum" className="col-span-12 md:col-span-4">
              <CourseLessons />
            </div>
          </div>
        ) : (
          <>
            <CourseMaterials />
            {/* only mobile */}
            <div id="curriculum" className="block lg:hidden col-span-12">
              <CourseLessons />
            </div>
            <Comments />
          </>
        )}
      </section>

      {/* lg screen && normal video */}
      {!isVideoExpanded && (
        <aside id="curriculum" className="hidden lg:block col-span-4 mt-28">
          <CourseLessons />
        </aside>
      )}
    </main>
  );
}

export default Page;
