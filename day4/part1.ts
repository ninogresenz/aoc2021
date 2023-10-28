import {Board} from "./board";
import {boards, drawnNumbers} from "./shared";

function checkWinner(boards: Board[], drawnNumbers: number[]) {
  const numbers = []
  for (const [index, round] of Object.entries(drawnNumbers)) {
    numbers.push(round)
    console.log(`starting new round ${index}...`, numbers)
    for (const board of boards) {
      if (!board.check(numbers)) continue
      console.log('board has won:', board.board)
      console.log('score', board.calculateScore())
      return
    }
  }
}

checkWinner(boards, drawnNumbers)
