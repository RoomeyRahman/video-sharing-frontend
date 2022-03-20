import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../components/layout/Layout"));
const VForm = dynamic(() => import("../components/profile/Video-Form"));

const Home: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <div className="bg-color">
        <div className="container relative mx-auto flex sm:flex-col flex-col md:flex-row sm:items-center sm:justify-center">
          <div className="md:w-1/2 md:py-16 lg:py-32 sm:w-full text-center md:text-left mb-5 md:mb-0">
            <h1 className="text-2xl md:mr-0 md:text-3xl lg:text-5xl lg:mb-12 text-white">
              <span style={{ color: "#F6BE00" }}>UPLOAD STORY</span>
            </h1>
            <h3 className="m md:mr-0 md:text-3xl lg:text-3xl lg:mb-12 text-white">
              Share your creativity with your story
            </h3>
          </div>
          <div className="md:w-1/2 md:py-8 lg:py-16 lg:px-16 mb-5">
            <VForm />
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Home;
