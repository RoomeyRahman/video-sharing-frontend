import React from "react";
import dynamic from "next/dynamic";

const VideoCardMin = dynamic(() => import("../common/VideoCardMin"));

type IProps = {};
type IState = {};

const videos = [
  {
    thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
    thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
    thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
    thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
    thumbnail: "https://source.unsplash.com/WLUHO9A_xik/1600x900",
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
            {videos &&
              Array.isArray(videos) &&
              videos.length > 0 &&
              videos.map((video, index) => {
                return (
                  <div
                    key={index}
                    className="transform hover:scale-105 duration-300 transition-transform"
                  >
                    <div className="p-1 w-full rounded-md">
                      <VideoCardMin
                        thumbnail={video.thumbnail}
                        title={video.title}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
    );
  }
}
export default VideoBlock;
