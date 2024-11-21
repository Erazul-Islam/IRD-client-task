/* eslint-disable prettier/prettier */
"use server"

import axios from "axios";

import envConfig from "@/config/envConfig";




const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;