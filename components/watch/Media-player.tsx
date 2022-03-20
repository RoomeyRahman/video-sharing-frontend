import React from "react";
import ReactPlayer from "react-player";
import Paragraph from "antd/lib/typography/Paragraph";
import { Avatar } from "antd";

type IProps = {
  url: string;
  light: string;
  title: string;
  description: string;
};

const MediaPlayer: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <div className="bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <div className="mx-auto px-5">
        <div className="aspect-w-16 aspect-h-9">
          <ReactPlayer
            url={props.url}
            controls
            light={props.light}
            width="920px"
            height="500px"
          />
        </div>
        <div>
          <div className="flex">
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Paragraph ellipsis={{ rows: 2 }}>
              <div className="font-bold text-xl mb-2">{props.title}</div>
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

export default MediaPlayer;
