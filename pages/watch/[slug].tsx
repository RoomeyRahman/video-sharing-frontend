import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../../components/layout/Layout"));
const MediaPlayer = dynamic(() => import("../../components/watch/Media-player"));

const Watch: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <MediaPlayer />
    </MasterLayout>
  );
};

export default Watch;
