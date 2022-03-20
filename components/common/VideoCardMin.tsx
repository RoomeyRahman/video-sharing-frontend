import React from "react";
import dynamic from "next/dynamic";
import Paragraph from "antd/lib/typography/Paragraph";
import { Avatar } from "antd";

const Img = dynamic(() => import("./Image-loader"));

type IProps = {
  thumbnail: string;
  title: string;
  description: string;
};

const VideoCardMin: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className="mx-auto">
      <div className="relative m-0 shadow-lg flex bg-white">
        <div className="flex-no-shrink">
          <Img
            className="w-64 h-64 block mx-auto"
            src={props.thumbnail}
            alt=""
            width={250}
            height={100}
            quality={100}
            layout="intrinsic"
          />
        </div>
        <div className="flex-1 card-block relative">
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
      </div>
    </div>
  );
};

export default VideoCardMin;
