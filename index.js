import WordleSolver from "./wordle-solver.js"

const wordList = ["date", "apple", "data", "pineapple", "banana", "ban", "pen", "pencil"]
const wordleSolver = new WordleSolver(wordList)

const prefix = "ba"
const output = wordleSolver.search(prefix)
console.log(output)
