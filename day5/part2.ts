import {countOverlaps, drawVents, initMatrix, parse, readFile} from "./part1";
const filledMatrix = drawVents(readFile().map(parse), initMatrix(), true);
console.log('count overlaps:', countOverlaps(filledMatrix))
