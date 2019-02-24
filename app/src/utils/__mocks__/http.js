export default {
  get: jest.fn(() => Promise.resolve({ data: [[2, 3], [3, 2]] }))
};
