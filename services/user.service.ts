import request from "../utils/request";

export async function postUserLogin(params) {
  return request("/auth/login/", {
    method: "POST",
    data: (params && params.data) || {},
  });
}

export async function postUserRegistration(params) {
  return request("/auth/register/", {
    method: "POST",
    data: (params && params.data) || {},
  });
}


