export default {
  get: jest.fn(() => Promise.resolve({ data: { movements: [[2, 3], [3, 2]] } }))
};
