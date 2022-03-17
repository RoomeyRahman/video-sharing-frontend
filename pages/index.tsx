import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../components/layout/Layout"));
const VideoBlock = dynamic(() => import("../components/home/Video-block"));

const Home: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <VideoBlock />
    </MasterLayout>
  );
};

export default Home;
