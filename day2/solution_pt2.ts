import {commands} from "./input";

const parsedCommands = commands.map(c => {
  const parts = c.split(' ')
  return {direction: parts[0], amount: Number(parts[1])}
})

let horizontal = 0
let depth = 0
let aim = 0

parsedCommands.forEach(({direction, amount}) => {
  switch (direction) {
    case 'up':
      aim -= amount
      break;
    case 'down':
      aim += amount
      break;
    case 'forward':
      horizontal += amount
      depth += aim * amount
      break;
  }
})

console.log('result:', horizontal * depth)
