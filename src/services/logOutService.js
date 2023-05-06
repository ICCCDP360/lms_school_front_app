import instanceBaseurl from "./auth/HttpInterceptor";

class logoutService {
  logout = (trigger) => {
    var config = {
      headers: {
        "x-access-token": localStorage.getItem("access_tokens"),
        school_id: localStorage.getItem("school_id"),
        "Content-Type": "application/json",
      },
    };
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .put(`auth/logout`, trigger, config)

        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new logoutService();
