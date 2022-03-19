import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../../components/layout/Layout"));
const VideoBlock = dynamic(() => import("../../components/home/Video-block"));
const ProfileCard = dynamic(
  () => import("../../components/profile/Profile-Card")
);

const Home: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <ProfileCard />
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
          
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Home;
