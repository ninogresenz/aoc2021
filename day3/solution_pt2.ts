import {binary} from "./input";

const bitLength = binary[0].length
let oxygenBits = [...binary]
for (let i = 0; i < bitLength && oxygenBits.length !== 1; i++) {
  oxygenBits = filter(oxygenBits, commonBits(getBits(oxygenBits, i), true), i)
}
const [oxygen] = oxygenBits

let co2Bits = [...binary]
for (let i = 0; i < bitLength && co2Bits.length !== 1; i++) {
  co2Bits = filter(co2Bits, commonBits(getBits(co2Bits, i), false), i)
}
let [co2] = co2Bits

let oxygenValue = parseInt(oxygen, 2);
let co2Value = parseInt(co2, 2);
console.log('oxygen:', oxygen, '->', oxygenValue)
console.log('co2:', co2, '->', co2Value)
const lifeSupportRating = oxygenValue * co2Value
console.log('life support rating:', lifeSupportRating)

function getBits(binary: string[], index: number) {
  return binary.map(s => s[index])
}

function filter(binary: string[], bit: string, index: number): string[] {
  return binary.filter(b => b[index] === bit)
}

function commonBits(bits: string[], most: boolean): string {
  let zeroBits = bits.filter(v => v === '0').length
  let oneBits = bits.filter(v => v === '1').length
  if (most) return oneBits > zeroBits || zeroBits === oneBits ? '1' : '0'
  else return zeroBits < oneBits || zeroBits === oneBits ? '0' : '1'
}
