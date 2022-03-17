import React from "react";

const AuthLayout = ({ children }: any) => {
  return (
    <React.Fragment>
      <div>
        <div className="bg-color">
          <div className="container relative mx-auto flex sm:flex-col flex-col md:flex-row sm:items-center sm:justify-center">
            <div className="md:w-1/2 md:py-16 lg:py-32 sm:w-full text-center md:text-left mb-5 md:mb-0">
              <h1 className="text-2xl md:mr-0 md:text-3xl lg:text-5xl lg:mb-12 text-white">
                <span style={{ color: "#F6BE00" }}>WELCOME</span>
              </h1>
              <h3 className="m md:mr-0 md:text-3xl lg:text-3xl lg:mb-12 text-white">
                Share your creativity with your story
              </h3>
            </div>
            <div className="md:w-1/2 md:py-8 lg:py-16 lg:px-16 mb-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AuthLayout;
