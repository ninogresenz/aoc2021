import {Board} from "./board";
import {boards, drawnNumbers} from "./shared";

function checkWinner(boards: Board[], drawnNumbers: number[]) {
  const numbers = []
  const winningBoards = []
  for (const [index, round] of Object.entries(drawnNumbers)) {
    numbers.push(round)
    console.log(`starting new round ${index}...`, numbers)
    for (const board of boards) {
      if (!board.check(numbers)) continue
      if (!winningBoards.map(board => board.id).includes(board.id)) {
        winningBoards.push(board)
        board.winningNumbers = [...numbers]
      }
    }

  }
  const board = winningBoards[winningBoards.length-1]
  console.log('winningBoards count: ', winningBoards.length)
  console.log('last winning board:', board)
  console.log('score:', board.calculateScore())
}

checkWinner(boards, drawnNumbers)
