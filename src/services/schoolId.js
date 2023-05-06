import instanceBaseurl1 from "./auth/HttpInterceptor1";

class schoolIdService {
  SchoolIdpage = (trigger) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl1
        .post(`school/init`, trigger)

        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new schoolIdService();
