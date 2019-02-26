import http from "../utils/http";

const KnightService = {
  getMoviment(position) {
    return new Promise((resolve, reject) =>
      http
        .get(`/moviments/knight/${position}`)
        .then(response => resolve(response.data.moviments))
        .catch(error => reject(error))
    );
  }
};

export default KnightService;
