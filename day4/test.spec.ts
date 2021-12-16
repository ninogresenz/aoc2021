import {Board} from "./board";
import {expect} from "chai";

describe('day4', function () {
  describe('checks', function () {
    it('should win because of horizontal match', function () {
      const board1 = new Board(1, [
          [1, 2, 3, 4, 6],
          [2, 2, 3, 4, 5],
          [3, 2, 3, 4, 5],
          [4, 2, 3, 4, 5],
          [5, 2, 3, 4, 5]
        ]
      )
      expect(board1.check([1, 2, 3, 4, 6])).to.be.true
    });

    it('should not win', function () {
      const board1 = new Board(1, [
          [1, 2, 3, 4, 5],
          [2, 3, 4, 5, 6],
          [3, 4, 5, 6, 7],
          [4, 5, 6, 7, 8],
          [5, 6, 7, 8, 9]
        ]
      )
      expect(board1.check([1, 2, 3, 4, 6])).to.be.false
    });

    it('should win because of vertically match', function () {
      const board1 = new Board(1, [
          [1, 2, 3, 4, 5],
          [2, 3, 4, 5, 6],
          [3, 4, 5, 6, 7],
          [4, 5, 6, 7, 8],
          [6, 6, 7, 8, 9]
        ]
      )
      expect(board1.check([1, 2, 3, 4, 6])).to.be.true
    });
  });
});
