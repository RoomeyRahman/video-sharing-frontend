import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Row, Col } from "antd";

const MasterLayout = dynamic(() => import("../../components/layout/Layout"));
const MediaPlayer = dynamic(
  () => import("../../components/watch/Media-player")
);
const VideoCard = dynamic(() => import("../../components/common/VideoCard"));

const video = {
  thumbnail: "/mountain.jpg",
  title: "Mountain",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
  exercitationem praesentium nihil.`,
  tags: ["photography", "nature"],
};

const Watch: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <div className="container mx-auto px-5 pb-8 lg:pb-10 py-5 lg:py-4">
        <Row gutter={24}>
          <Col className="gutter-row" xs={24} lg={17}>
            <MediaPlayer
              url={"https://www.youtube.com/watch?v=Rq5SEhs9lws"}
              light={"/mountain.jpg"}
              title={"Mountain"}
              description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.`}
            />
          </Col>
          <Col className="gutter-row" xs={24} lg={7}>
            <VideoCard
              thumbnail={video.thumbnail}
              title={video.title}
              description={video.description}
              tags={video.tags}
            />
          </Col>
        </Row>
      </div>
    </MasterLayout>
  );
};

export default Watch;
