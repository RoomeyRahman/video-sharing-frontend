import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  getUserRetrive,
  postUserLoginRefresh,
} from "../../services/user.service";

const cookie = require("cookie");
const Img = dynamic(() => import("../common/Image-loader"));

type IProps = {};

const ProfileCard: React.FunctionComponent<IProps> = (props: IProps) => {
  const [me, setMe] = useState<any>({});
  useEffect(() => {
    setCurrentUser();
  }, []);

  const setCurrentUser = async () => {
    const response: any = await getUserRetrive({});
    if (response && response.status === 200) {
      setMe(response.data);
    } else if (response && response.status === 401) {
      const isRefreshed = await refreshLogin();
      if (isRefreshed == true) {
        setCurrentUser();
      } else {
        // something went wrong
      }
    }
  };

  const refreshLogin = async () => {
    const cookies = cookie.parse(document.cookie);
    const refresh = cookies.refresh;
    const response: any = await postUserLoginRefresh({
      data: { refresh: refresh },
    });
    if (response && response.status === 200) {
      const maxAge = 864000000;
      await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.data.access,
          refresh: refresh,
          tokenMaxAge: maxAge,
        }),
      });
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bg-white p-3 border-t-4 border-green-400">
      <div className="image overflow-hidden">
        <Img
          className="h-auto w-full mx-auto"
          src={
            "/pp.png" ||
            "https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
          }
          alt=""
          width={600}
          height={600}
          quality={100}
          layout="intrinsic"
        />
      </div>
      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
        {me.username}
      </h1>
      <h3 className="text-gray-600 font-lg text-semibold leading-6">
        {me.email}
      </h3>
      {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        eligendi dolorum sequi illum qui unde aspernatur non deserunt
      </p> */}
      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
              Active
            </span>
          </span>
        </li>
        {/* <li className="flex items-center py-3">
          <span>Member since</span>
          <span className="ml-auto">Nov 07, 2016</span>
        </li> */}
      </ul>
    </div>
  );
};

export default ProfileCard;
