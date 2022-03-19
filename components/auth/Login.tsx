import React, { ReactElement, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Form, Input, Button, Checkbox, Alert } from "antd";

const Img = dynamic(() => import("../common/Image-loader"));
const ErrorBoundary = dynamic(() => import("../common/Error-boundary"));

export type IAlertType = {
  message: string | ReactElement;
  type: "success" | "info" | "error";
};
interface IFormItems {
  username: string;
  password: string;
  remember: boolean;
}

function Login(params: any) {
  const { isModalCall = false } = params;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<IAlertType | null>(null);

  const submitLoginForm = async (values: IFormItems) => {
    setIsLoading(true);
    setAlertMessage(null);

    try {
      const response: any = await import("../../services/user.service").then(
        async (service) => await service.postUserLogin({ data: values })
      );

      if (!response || !response.hasOwnProperty("status")) {
        setIsLoading(false);
        return setAlertMessage({
          message: "Internal Server Error",
          type: "error",
        });
      }

      switch (response.status) {
        case 200:
          const { access, refresh } = response.data;
          // const cookieSaved = await fetch("/api/login", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({ token: token, me: me, tokenMaxAge: maxAge }),
          // });

          // if (Router.pathname !== "/login") {
          //   saveLoginModal(false);
          //   // Router.reload()
          //   window.location.reload();
          // } else if (cookieSaved.status === 200) {
          //   window.location.reload();
          //   // Router.push("/");
          // } else {
          //   setAlertMessage({
          //     message: t("modalMsg.SIGN_UP.SOMETHING_WENT_WRONG"),
          //     type: "error",
          //   });
          // }
          break;

        case 401:
          setAlertMessage({
            message: "No active account found with the given credentials",
            type: "error",
          });

          break;

        default:
          setAlertMessage({
            message: "SOMETHING_WENT_WRONG",
            type: "error",
          });
      }
    } catch (err) {
      setAlertMessage({
        message: "Internal Server Error",
        type: "error",
      });
    }

    setIsLoading(false);
  };

  const renderLogin = () => (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={submitLoginForm}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder={"Username"} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder={"Password"} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>{"Remember me"}</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          {"Sign In"}
        </Button>
        <div className="flex justify-center">
          <Link href="/auth/forget-password" passHref>
            {"Forget Password"}
          </Link>
        </div>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div
        className={
          !isModalCall
            ? "flex flex-col bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-50 max-w-md"
            : "flex flex-col bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-0 rounded-xl w-50 max-w-md"
        }
      >
        {!isModalCall && (
          <div>
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Log In Now
            </div>
            <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
              Enter your credentials below to log in
            </div>
          </div>
        )}

        <div className="mt-10">
          {alertMessage && (
            <div className="mb-5">
              <ErrorBoundary>
                <Alert
                  message={alertMessage.message}
                  type={alertMessage.type}
                  showIcon
                  closable
                />
              </ErrorBoundary>
            </div>
          )}

          <ErrorBoundary>{renderLogin()}</ErrorBoundary>

          <p className="mt-8">
            {" "}
            New here?{" "}
            <span className="cursor-pointer text-sm text-blue-600">
              <Link href="/signup" passHref>
                Register now for FREE!
              </Link>
            </span>
          </p>
          <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
            <Img
              className="h-5 cursor-pointer"
              alt="google"
              src="https://i.imgur.com/arC60SB.png"
              width={20}
              height={20}
              quality={100}
              layout="intrinsic"
            />
            <button>Or Sign-In with Google</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
