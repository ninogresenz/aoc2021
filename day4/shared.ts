import {Board} from "./board";
import {parse} from "../common";

export function createBoards(input: string[]): Board[] {
  const boards = []
  let currentBoard: number[][] = []
  for (const row of input) {
    const convertedRow = row.trim().split(' ').filter(a => a.length > 0).map(n => Number(n))
    if (row.length > 0) {
      currentBoard.push(convertedRow)
    } else {
      currentBoard = []
      boards.push(currentBoard)
    }
  }
  return boards.map((board, index) => new Board(index, board))
}

const arr = parse(__dirname + '/input')
export const drawnNumbers = arr[0].split(',').map(s => Number(s))
arr.shift()
arr.shift()
arr.pop()
export const boards = createBoards(arr)

