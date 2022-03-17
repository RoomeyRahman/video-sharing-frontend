import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const MasterLayout = dynamic(() => import("../components/layout/Layout"));
const VideoCard = dynamic(() => import("../components/common/VideoCard"));

const Home: NextPage = () => {
  const title = "Share your creativity with your story";

  return (
    <MasterLayout title={title}>
      <VideoCard />
    </MasterLayout>
  );
};

export default Home;
