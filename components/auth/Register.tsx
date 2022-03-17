import React, { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import { Form, Input, Button, Checkbox, Modal, Alert, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Router from "next/router";

const ErrorBoundary = dynamic(() => import("../common/Error-boundary"));
const Img = dynamic(() => import("../common/Image-loader"));
const { Link: TypeLink } = Typography;

export type IAlertType = {
  message: string | ReactElement;
  type: "success" | "info" | "error";
};

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState<IAlertType | null>(null);
  const [form] = Form.useForm();

  const submitRegForm = async (values) => {
    setIsLoading(true);
    setAlertMessage(null);

    values.email = values.email.toLowerCase().trim();

    setIsLoading(false);
  };

  const renderSignup = () => {
    return (
      <ErrorBoundary>
        <Form
          // {...formItemLayout}
          form={form}
          name="register"
          onFinish={submitRegForm}
          initialValues={{
            prefix: "+1",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a valid Email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder={"Email"} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message:
                  "Password must be between 5 to 20 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character",
                min: 5,
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder={"Password"} />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return value.length > 0
                    ? Promise.reject(
                        "The two passwords that you entered do not match!"
                      )
                    : Promise.reject("");
                },
              }),
            ]}
          >
            <Input.Password placeholder={"Confirm Password"} />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Should accept the agreement",
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept the agreement"),
              },
            ]}
          >
            <Checkbox>
              {"I have read and accept the"}{" "}
              <a onClick={() => setShowModal(true)}>{"agreement"}</a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              {"Sign Up"}
            </Button>
            <div className="flex justify-center">
              <ErrorBoundary>
                <Button type="link" onClick={() => Router.push("/login")}>
                  <ArrowLeftOutlined />
                  {"Back to login"}
                </Button>
              </ErrorBoundary>
            </div>
          </Form.Item>
        </Form>
      </ErrorBoundary>
    );
  };

  return (
    <>
      <div className="flex flex-col bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Register Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials below to create an account
        </div>

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

          <ErrorBoundary>{renderSignup()}</ErrorBoundary>

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
};

export default Signup;
