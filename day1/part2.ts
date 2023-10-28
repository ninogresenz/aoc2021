import {measures} from "./input";
let count = 0
let lastNumber = 0
for (let index = 0; index < measures.length-2; index++) {
  const first = measures[index]
  const second = measures[index + 1] || 0
  const third = measures[index + 2] || 0
  const result = first + second + third
  if (index === 0) {
    lastNumber = result
    continue
  }
  if (result > lastNumber) count ++
  lastNumber = result
}
console.log(count)
