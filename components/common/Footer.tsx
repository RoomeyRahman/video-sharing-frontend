import React from "react";

type IProps = {};

const Footer: React.FunctionComponent<IProps> = () => {
  return (
    <React.Fragment>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div
          className="text-center text-gray-700 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-gray-800" href="https://tailwind-elements.com/">
            Roomey Rahman
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
