import React, { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const VideoCard = dynamic(() => import("../common/VideoCard"));

type IProps = {};
type IState = {};

const videos = [
  {
    thumbnail: "https://wallpaperaccess.com/full/3458146.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://www.seekpng.com/png/full/619-6199498_nebolous-agario-and-mitosis-thumbnail-effects.png",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
  {
    thumbnail:
      "https://pngbackground.com/files/preview/1280x732/11626402992wovfkga0onkeklrheqfomnmcosphur25ds9j5qxwi60p4r22crituf0s4d7eseh4wou7tjrzgnsgmteftukqbgpplxwfmz4dygpo.jpg",
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    tags: ["photography", "nature"],
  },
];

const VideoBlock: React.FunctionComponent<IProps> = (props: IProps) => {
  const [videos, setVideos] = useState<any>([])
  useEffect(() => {    
    import("../../services/video.service").then(
      async (service) => await service.getVideos({})
    ).then(res=> {
      const results = res.data.results
      setVideos(results)
    });   
    
  }, []);

  return (
    <div className="bg-white">
      <div className="px-5 py-10">
        {/* <h2 className="text-3xl text-center lg:mb-9">Recent Service</h2> */}
        <div className="flex flex-wrap justify-between">
          {videos &&
            Array.isArray(videos) &&
            videos.length > 0 &&
            videos.map((video, index) => {
              return (
                <div
                  key={index}
                  className="md:w-1/2 lg:w-1/4 transform hover:scale-102 duration-300 transition-transform"
                >
                  <div className="p-1 w-full rounded-md ">
                    <VideoCard
                      thumbnail={video.thumbnail || 'https://wallpaperaccess.com/full/3458146.jpg'}
                      title={video.title}
                      description={video.description}
                      tags={video.tags || ["photography", "nature"]}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoBlock;
