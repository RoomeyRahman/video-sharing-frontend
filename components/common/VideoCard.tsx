import React from "react";
import dynamic from "next/dynamic";
import Paragraph from "antd/lib/typography/Paragraph";
import { Avatar } from "antd";

const Img = dynamic(() => import("./Image-loader"));

type IProps = {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
};

const VideoCard: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className="p-2">
      <div className="max-w-sm rounded overflow-hidden hover:border">
        <Img
          className="w-full"
          src={props.thumbnail}
          alt=""
          width={1200}
          height={600}
          quality={100}
          layout="intrinsic"
        />
        <div className="p-2">
          <div className="flex">
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Paragraph ellipsis={{ rows: 2 }}>
            <div className="font-semibold text-xl ml-2">{props.title}</div>
            </Paragraph>
          </div>
          <Paragraph ellipsis={{ rows: 2 }}>
            <div className="text-gray-500 text-base">{props.description}</div>
          </Paragraph>
        </div>
        <div className="px-6 pt-4 pb-2">
          {props.tags &&
            Array.isArray(props.tags) &&
            props.tags.length > 0 &&
            props.tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
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
