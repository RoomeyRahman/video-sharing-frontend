import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../common/Header"));

const Layout = ({
  title,
  children,
  isAuthenticated = false,
  token = null,
}: any) => {
  title = title ? title : "iLafe";
  return (
    <React.Fragment>
      <Header title={title} />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
