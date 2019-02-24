import http from "../utils/http";

const KnightService = {
  getMoviment(position) {
    // return new Promise((resolve, reject) => {
    //   http
    //     .get(`/knight/moviment/${position}`)
    //     .then(response => resolve(response.data))
    //     .catch(error => reject(error));
    // });

    return new Promise(resolve => {
      return setTimeout(() => {
        resolve([[2, 3], [3, 2], [1, 7]]);
      }, 1000);
    });
  }
};

export default KnightService;
