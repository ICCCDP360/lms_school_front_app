import instanceBaseurl1 from "./auth/HttpInterceptor1";

class classSelectionService {
  classSelect = (trigger) => {
    return new Promise((resolve, reject) => {
      instanceBaseurl1
        .post(`course/filter/course`, trigger)

        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default new classSelectionService();
