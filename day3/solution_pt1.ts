import {binary} from "./input";

let gammaBits = ''
let epsilonRateBits = ''
const bitLength = binary[0].length
for (let i = 0; i < bitLength; i++) {
  gammaBits += commonBits(getBits(binary, i), true)
  epsilonRateBits += commonBits(getBits(binary, i), false)
}
const gammaValue = parseInt(gammaBits, 2)
const epsilonRateValue = parseInt(epsilonRateBits, 2)
console.log('gamma:', gammaBits, '->', gammaValue)
console.log('epsilon:', epsilonRateBits, '->', epsilonRateValue)
console.log('power consumption:', gammaValue * epsilonRateValue)

function getBits(binary: string[], index: number) {
  return binary.map(s => s[index])
}

function commonBits(bits: string[], most: boolean): string {
  let zeroBits = bits.filter(v => v === '0').length
  let oneBits = bits.filter(v => v === '1').length
  if (most)  return zeroBits > oneBits ? '0' : '1'
  else return zeroBits < oneBits ? '0' : '1'
}
