import fs from 'fs';

type Vent = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

type Matrix = number[][]

function readFile(): string[] {
  const input = fs.readFileSync(__dirname + '/input', 'utf8');
  const res = input.split('\n')
  res.pop()
  return res
}

function parse(line: string): Vent {
  const [[x1, y1], [x2, y2], yc] = line.split(' -> ')
    .map(l => l.split(',').map(v => Number(v)))
  return {x1, y1, x2, y2}
}

function initMatrix(): Matrix {
  const matrix: Matrix = []
  for (let i = 0; i < 1000; i++) {
    matrix[i] = []
    for (let j = 0; j < 1000; j++) {
      matrix[i][j] = 0
    }
  }
  return matrix
}

function drawVents(v: Vent[], matrix: Matrix): Matrix {
  let directionX = 1
  let directionY = 1
  for (const vent of v) {
    if (vent.x1 === vent.x2 || vent.y1 === vent.y2) {
      directionX = vent.x1 > vent.x2 ? -1 : 1
      directionY = vent.y1 > vent.y2 ? -1 : 1
      console.log('draw vent', vent)
      let posX = vent.x1
      let posY = vent.y1
      while (true) {
        matrix[posX][posY]++
        if (vent.x2 === posX && vent.y2 === posY)
          break
        if (vent.x2 !== posX) {
          posX += directionX
        }
        if (vent.y2 !== posY) {
          posY += directionY
        }
      }
    }
  }
  return matrix
}

function countOverlaps(m: Matrix): number {
  let count = 0
  for (const row of m) {
    for (const cell of row) {
      if (cell > 1) count++
    }
  }
  return count
}

const filledMatrix = drawVents(readFile().map(parse), initMatrix());
console.log('count overlaps:', countOverlaps(filledMatrix))
