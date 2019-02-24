export default {
  getMoviment: jest.fn(() => Promise.resolve([[2, 3], [3, 2], [1, 7]]))
};
