const LETTERS = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H"
};

const formatPosition = (x, y) => (LETTERS[x] + y).toString();

export default formatPosition;
