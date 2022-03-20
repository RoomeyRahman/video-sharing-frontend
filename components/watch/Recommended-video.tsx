import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { getVideos } from "../../services/video.service";
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

const VideoBlock = () => {
  const [videos, setVideos] = useState<any>([]);
  useEffect(() => {
    async function fetchVideos() {
      const response = await getVideos({});
      const results = response.data.results;
      console.log(results);
      setVideos(results);
    }
    fetchVideos();
  }, []);
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
                  <Link href={`/watch/${video.id}`} passHref>
                    <a>
                      <VideoCardMin
                        thumbnail={
                          video.thumbnail_url ||
                          "https://www.seekpng.com/png/full/619-6199498_nebolous-agario-and-mitosis-thumbnail-effects.png"
                        }
                        title={video.title}
                        description={video.description}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoBlock;
