import {measures} from "./input";
let count = 0
measures.forEach((value, index) => {
  if (index === 0) return
  if (value > measures[index-1]) count ++
})
console.log('count:', count)
