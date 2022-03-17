import React from "react";
import dynamic from "next/dynamic";

const Img = dynamic(() => import("./Image-loader"));


type IProps = {};
type IState = {};

class VideoCard extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Img
                className="w-full"
                src="/mountain.jpg"
                alt="Mountain"
                width={1200}
                height={800}
                quality={100}
                layout="intrinsic"
            />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoCard;
