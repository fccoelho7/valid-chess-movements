import http from "../utils/http";

const KnightService = {
  getMoviment(position) {
    return new Promise((resolve, reject) => {
      http
        .get(`/knight/moviment/${position}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  }
};

export default KnightService;
