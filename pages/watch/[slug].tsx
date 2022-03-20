import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Row, Col } from "antd";
import { getVideoById } from "../../services/video.service";

const MasterLayout = dynamic(() => import("../../components/layout/Layout"));
const MediaPlayer = dynamic(
  () => import("../../components/watch/Media-player")
);
const Recomended = dynamic(
  () => import("../../components/watch/Recommended-video")
);

const video = {
  thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
  title: "Mountain",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
  exercitationem praesentium nihil.`,
  tags: ["photography", "nature"],
};

interface IProps {
  slug: any;
}

const Watch = (props: IProps) => {
  const title = "Share your creativity with your story";
  const [video, setVideo] = useState<any>({});

  useEffect(() => {
    async function fetchVideos() {
      const response = await getVideoById({id: props.slug});
      setVideo(response.data)
    }
    fetchVideos()
  }, []);

  return (
    <MasterLayout title={title}>
      <div className="container mx-auto px-5 pb-8 lg:pb-10 py-5 lg:py-4">
        <Row gutter={24}>
          <Col className="gutter-row" xs={24} lg={16}>
            <MediaPlayer
              url={video.url}
              light={video.thumbnail_url || "https://wallpaperaccess.com/full/3458146.jpg"}
              title={video.title}
              description={video.description}
            />
          </Col>
          <Col className="gutter-row" xs={24} lg={8}>
            <Recomended />
          </Col>
        </Row>
      </div>
    </MasterLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req, query = {} } = ctx;
    return {
      props: {
        slug: query.slug,
      },
    };
};

export default Watch;
