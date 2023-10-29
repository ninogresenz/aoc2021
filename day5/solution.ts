import fs from 'fs';

export type Vent = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export type Matrix = number[][]

export function readFile(): string[] {
  const input = fs.readFileSync(__dirname + '/input', 'utf8');
  const res = input.split('\n')
  res.pop()
  return res
}

export function parse(line: string): Vent {

  const [[x1, y1], [x2, y2], yc] = line.split(' -> ')
    .map(l => l.split(',').map(v => Number(v)))
  return {x1, y1, x2, y2}
}

export function initMatrix(): Matrix {
  const matrix: Matrix = []
  for (let i = 0; i < 1000; i++) {
    matrix[i] = []
    for (let j = 0; j < 1000; j++) {
      matrix[i][j] = 0
    }
  }
  return matrix
}

export function drawVents(v: Vent[], matrix: Matrix, vertricalLines: boolean): Matrix {
  let directionX = 1
  let directionY = 1
  for (const vent of v) {
    if (!vertricalLines && vent.x1 !== vent.x2 && vent.y1 !== vent.y2) {
      continue
    }
    directionX = vent.x1 > vent.x2 ? -1 : 1
    directionY = vent.y1 > vent.y2 ? -1 : 1
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
  return matrix
}

export function countOverlaps(m: Matrix): number {
  let count = 0
  for (const row of m) {
    for (const cell of row) {
      if (cell > 1) count++
    }
  }
  return count
}

const part1Matrix = drawVents(readFile().map(parse), initMatrix(), false);
console.log('part 1:', countOverlaps(part1Matrix))
const part2Matrix = drawVents(readFile().map(parse), initMatrix(), true);
console.log('part 2:', countOverlaps(part2Matrix))
