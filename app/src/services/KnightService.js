import http from "../utils/http";

const KnightService = {
  getMovements(position) {
    return new Promise((resolve, reject) =>
      http
        .get(`/movements/knight/${position}`)
        .then(response => resolve(response.data.movements))
        .catch(error => reject(error))
    );
  }
};

export default KnightService;
