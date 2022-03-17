import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";

const Img = dynamic(() => import("../common/Image-loader"));

type IProps = {};

const MediaPlayer: React.FunctionComponent<IProps> = (props: IProps) => {
  const [isPlaying, setisPlaying] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-5 py-10">
        <ReactPlayer
          url="/Deathstroke.mkv"
          controls
          light={"/mountain.jpg"}
          volume={1}
          muted={false}
        />
      </div>
    </div>
  );
};

export default MediaPlayer;
