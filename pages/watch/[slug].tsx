import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../../components/layout/Layout"));
const MediaPlayer = dynamic(() => import("../../components/watch/Media-player"));

const Watch: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <MediaPlayer
        url={"https://www.youtube.com/watch?v=Rq5SEhs9lws"}
        light={"/mountain.jpg"}
        title={"Mountain"}
        description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, Nonea! Maiores et perferendis eaque,
        exercitationem praesentium nihil.`}
      />
    </MasterLayout>
  );
};

export default Watch;
