import React from "react";
import dynamic from "next/dynamic";

const VideoCard = dynamic(() => import("../common/VideoCard"));

type IProps = {};
type IState = {};

const videos = [
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail: "/mountain.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
];

class VideoBlock extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="bg-white">
        <div className="container mx-auto px-5 py-10">
          {/* <h2 className="text-3xl text-center lg:mb-9">Recent Service</h2> */}
          <div className="flex flex-wrap justify-between text-center">
            {videos &&
              Array.isArray(videos) &&
              videos.length > 0 &&
              videos.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="md:w-1/2 lg:w-1/4 transform hover:scale-105 duration-300 transition-transform"
                  >
                    <div className="p-1 w-full rounded-md">
                      <VideoCard
                        thumbnail={video.thumbnail}
                        title={video.title}
                        description={video.description}
                        tags={video.tags}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
export default VideoBlock;
