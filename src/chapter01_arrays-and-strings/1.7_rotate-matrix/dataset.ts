export default [
  {
    in: [[0, 1], [2, 3]],
    out: [[2, 0], [3, 1]],
  },
  {
    in: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
    out: [[6, 3, 0], [7, 4, 1], [8, 5, 2]],
  },
  {
    in: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]],
    out: [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]],
  },
  {
    in: [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
    ],
    out: [
      [20, 15, 10, 5, 0],
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
    ],
  },
];
