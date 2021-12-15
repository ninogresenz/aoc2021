import fs from "fs";

export function parse(file: string): string[] {
  const inputRaw = fs.readFileSync(file, {encoding: 'utf-8'})
  return inputRaw.split('\n')
}
