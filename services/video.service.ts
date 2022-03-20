import request from "../utils/request";

export async function getVideos(params) {
  return request("videos/", {
    method: "GET",
    data: (params && params.data) || {},
  });
}

export async function getVideoById(params) {
  console.log("service file: ", params)
  return request(`videos/${params.id}`, {
    method: "GET",
    data: (params && params.data) || {},
  });
}
