import { API_2 } from "./api";

const userService = {
  getComment: function (idFilm) {
    return API_2.get("comment/", {
      params: {
        video_id: idFilm,
      },
    });
  },
  postComment: function (data, accessToken) {
    return API_2.post(
      "comment/",
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  },
  replyComment: function (data, accessToken) {
    return API_2.post(
      "reply-comment/",
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  },
};

export default userService;
