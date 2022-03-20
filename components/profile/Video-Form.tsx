import React, { ReactElement, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import dynamic from "next/dynamic";
import { Form, Input, Button, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const Img = dynamic(() => import("../common/Image-loader"));
const ErrorBoundary = dynamic(() => import("../common/Error-boundary"));

export type IAlertType = {
  message: string | ReactElement;
  type: "success" | "info" | "error";
};
interface IFormItems {
  title: string;
  description: string;
  remember: boolean;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isMp4 = file.type === "video/mp4";
  if (!isMp4) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt100M = file.size / 1024 / 1024 < 100;
  if (!isLt100M) {
    message.error("Image must smaller than 100MB!");
  }
  return true
  return isMp4 && isLt100M;
}

function VForm(params: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<IAlertType | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setIsLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setIsLoading(false);
      });
    }
  };

  const renderUploadButton = () => (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Video</div>
    </div>
  );

  const submitForm = async (values: IFormItems) => {
    setIsLoading(true);
    setAlertMessage(null);
    console.log(values);

    setIsLoading(false);
  };

  const renderForm = () => (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={submitForm}
      autoComplete="off"
    >
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "enter video title!",
          },
        ]}
      >
        <Input placeholder={"Title"} />
      </Form.Item>

      <Form.Item
        name="description"
        rules={[
          {
            required: false,
            message: "Please input your description!",
          },
        ]}
      >
        <Input.TextArea placeholder={"Description"} />
      </Form.Item>

      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          renderUploadButton()
        )}
      </Upload>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          {"Upload"}
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div
        className={
          "flex flex-col bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-0 rounded-xl w-50 max-w-md"
        }
      >
        <div className="mt-10">
          <ErrorBoundary>{renderForm()}</ErrorBoundary>
        </div>
      </div>
    </>
  );
}
export default VForm;
