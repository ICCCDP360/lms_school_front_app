import instanceBaseurl from "./auth/HttpInterceptor";

class signInService {
  SignInpage = (trigger) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl
        .post(`auth/login`, trigger)

        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new signInService();
