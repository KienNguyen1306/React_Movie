import { API_2 } from "./api";
const client_secret =
  "g58cgOrpKIAogtI6uHA8UONFyHLi5rXGuXVvUfm9ehS0k1MBgX6MQI8rRIOGqY8UXXOlzrvLydFVXDK1lv2iTB457Z2HSGrbcHnLY0QT4KAm2gaRuWNSoCz5keqqaFrb";

const client_id = "XzaWhfGCGehEGo4K54C1fiuaV13BJKmjqugXiQye";

const userService = {
  getToken: function (infoUser) {
    return API_2.post("o/token/", {
      client_id: client_id,
      client_secret: client_secret,
      grant_type: "password",
      ...infoUser,
    });
  },
  getCurrentUser: function (accessToken) {
    return API_2.get("register/current-user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
  postRegisterUser: function (data) {
    return API_2.post("register/", { ...data });
  },
};

export default userService;
