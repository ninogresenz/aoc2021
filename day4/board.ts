export class Board {
  constructor(id: number, input: number[][]) {
    this.id = id
    this.board = input
    this.winningNumbers = []
  }

  id: number
  board: number[][]
  winningNumbers: number[]

  check(drawnNums: number[]): boolean {
    // horizontal check
    for (const row of this.board) {
      let marked = 0
      for (const num of row) {
        if (drawnNums.includes(num))
          marked++
      }
      if (marked === 5)
        return true
    }

    // vertical check
    const [firstRow] = this.board
    for (let col = 0; col < firstRow.length; col++) {
      let market = 0
      for (let row = 0; row < this.board.length; row++) {
        if (drawnNums.includes(this.board[row][col]))
          market++
        if (market === 5)
          return true
      }
    }
    return false
  }

  calculateScore(): number {
    const allRowsFlat = []
    for (const row of this.board) {
      allRowsFlat.push(...row)
    }
    const unmarked = allRowsFlat.filter(val => !this.winningNumbers.includes(val))
    const sum = unmarked.length > 0 ? unmarked.reduce((a, b) => a+b) : 0
    return sum * this.winningNumbers[this.winningNumbers.length-1]
  }
}
