import {commands} from "./input";

const parsedCommands = commands.map(c => {
  const parts = c.split(' ')
  return {direction: parts[0], amount: Number(parts[1])}
})

let horizontal = 0
let depth = 0

parsedCommands.forEach(({direction, amount}) => {
  switch (direction) {
    case 'up':
      depth -= amount
      break;
    case 'down':
      depth += amount
      break;
    case 'forward':
      horizontal += amount
      break;
  }
})

console.log('result:', horizontal * depth)
