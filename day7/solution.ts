import fs from "fs";

export function readFile(): number[] {
  const input = fs.readFileSync(__dirname + '/input', 'utf8');
  return input.split('\n')[0].split(',').map(s => Number(s))
}

// determine min and max position
type Range = {min: number, max: number}
function findRange(input: number[]): Range {
  let min = 0
  let max = 0
  for (const i of input) {
    min = Math.min(min, i)
    max = Math.max(max, i)
  }
  return {min, max}
}

// determine distance between crab and position
function distance(crab: number, position: number) {
  const diff = position - crab
  return diff < 0 ? diff * -1 : diff
}
type Position = {
  position: number,
  fuel: number
}

function calcuelatePart1() {
// calculate overall fuel
// try every position and save it
// find the position with the smallest fuel
  const crabs = readFile()
  const range = findRange(crabs)
  let lowestPosition = {
    position: Infinity,
    fuel: Infinity
  }
  for (let position = range.min; position < range.max; position++) {
    let fuel = 0
    for (const crab of crabs) {
      const currentDist = distance(crab, position)
      fuel += currentDist
    }
    if (fuel < lowestPosition.fuel) {
      lowestPosition.fuel = fuel
      lowestPosition.position = position
    }
  }
  return lowestPosition
}

function calcuelatePart2() {
// try every position and save it
// find the position with the smallest fuel
  const crabs = readFile()
  const range = findRange(crabs)
  let lowestPosition = {
    position: Infinity,
    fuel: Infinity
  }
  for (let position = range.min; position < range.max; position++) {
    let fuel = 0
    for (const crab of crabs) {
      const currentDist = distance(crab, position)
      for (let i = 1; i <= currentDist; i++) {
        fuel += i
      }
    }
    if (fuel < lowestPosition.fuel) {
      lowestPosition.fuel = fuel
      lowestPosition.position = position
    }
  }
  return lowestPosition
}

console.log('part 1:', calcuelatePart1())
console.log('part 2:', calcuelatePart2())

