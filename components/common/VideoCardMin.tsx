import React from "react";
import dynamic from "next/dynamic";

const Img = dynamic(() => import("./Image-loader"));

type IProps = {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
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
          <div className="p-6">
            <h4 className="font-medium text-2xl mb-3">{props.title}</h4>
            <a
              className="-m-4 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker absolute pin-t pin-r"
              href="#"
            >
              <i className="text-xl fa fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardMin;
