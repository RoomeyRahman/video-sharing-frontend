import request from "../utils/request";

export async function getVideos(params) {
  return request("videos/", {
    method: "GET",
    data: (params && params.data) || {},
  });
}
