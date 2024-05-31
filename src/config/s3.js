import { axiosInstance } from "./axios";
import axios from "axios";

const headers = {
  "Content-Type": "multipart/form-data",
};

export const uploadFile = async (url, file, onUploadProgress) => {
  try {
    const response = await axios.put(url, file, {
      headers: headers,
      onUploadProgress: onUploadProgress, // Pass the callback here
    });
    return response;
  } catch (error) {
    console.log("Error while calling the API ", error.message);
    return error.response.data;
  }
};

export const getSignedURL = async (type) => {
  try {
    const secureUpload = await axiosInstance.post(`/aws/getSignedUrl`, {
      type: type,
    }); // from our server
    const url = secureUpload.data.url;
    return url;
  } catch (err) {
    console.log(`Inside getSignedURL function and the error is : ${err}`);
  }
};
