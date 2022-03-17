import React from "react";
import dynamic from "next/dynamic";

const Img = dynamic(() => import("./Image-loader"));

type IProps = {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
};

const VideoCard: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Img
          className="w-full"
          src={props.thumbnail}
          alt=""
          width={1200}
          height={800}
          quality={100}
          layout="intrinsic"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.tags &&
            Array.isArray(props.tags) &&
            props.tags.length > 0 &&
            props.tags.map((tag, index) => {
              return (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
