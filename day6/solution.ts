import fs from "fs";

export function readFile(): number[] {
  const input = fs.readFileSync(__dirname + '/input', 'utf8');
  return input.split('\n')[0].split(',').map(s => Number(s))
}

export function calculate(days: number) {
  const input = readFile()
  const fishList = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (const n of input) {
    fishList[n] = fishList[n] + 1
  }
  for (let day = 0; day < days; day++) {
    let lastCount = 0
    for (let j = fishList.length - 1; j >= 0; j--) {
      const currentCount = fishList[j]
      fishList[j] = lastCount
      lastCount = currentCount
    }
    fishList[6] = fishList[6] + lastCount
    fishList[8] = lastCount
  }
  return fishList.reduce((a, b) => a + b)
}

console.log('part 1', calculate(80))
console.log('part 2', calculate(265))
