export const uri = {
  auth: {
    GOOGLE_LOGIN: "/login/google",
    GITHUB_LOGIN: "/login/github",
    GET_USER_SESSION: "/oauth/user",
    CREDENTIALS_LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PING: "/auth/ping",
  },
  user: {
    UPDATE_USER: "user/update",
  },
  business: {
    GET_SIGNED_URL: "aws/getSignedUrl",
    CREATE_BUSINESS: "business/create",
    GET_BUSINESS: "business/get",
    ADD_CONTENT: "business/addContent",
    GET_CONTENT: "business/getContent",
    ADD_SECTION: "business/addSection",
    ADD_VIDEO: "business/addVideo",
    ADD_BANNER: "business/addBanner",
    GET_BANNER: "business/getBanner",
  },
  services: {
    OAUTH2_GOOGLE_STATUS: "/login/google/status",
    OAUTH2_GITHUB_STATUS: "/login/github/status",
  },
};
