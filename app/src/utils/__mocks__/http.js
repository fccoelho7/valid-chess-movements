export default {
  get: jest.fn(() => Promise.resolve({ data: { moviments: [[2, 3], [3, 2]] } }))
};
