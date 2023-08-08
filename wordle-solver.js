class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class WordleSolver {
    constructor(wordList) {
        this.root = new TrieNode()
        this.initTrie(wordList)
    }

    initTrie(wordList) {
        wordList.forEach(word => {
            this.insert(word)
        })
    }

    insert(word) {
        let currentNode = this.root

        for (let i = 0; i < word.length; i++) {
            const char = word[i]

            if (!currentNode.children[char]) {
                currentNode.children[char] = new TrieNode()
            }

            currentNode = currentNode.children[char]
        }

        currentNode.isEndOfWord = true
    }

    search(prefix) {
        let currentNode = this.root

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i]

            if (!currentNode.children[char]) {
                return []
            }

            currentNode = currentNode.children[char]
        }

        const validWords = []

        const traverse = (node, prefix) => {
            if (node.isEndOfWord) {
                validWords.push(prefix)
            }

            for (const char in node.children) {
                traverse(node.children[char], prefix + char)
            }
        }

        traverse(currentNode, prefix)

        return validWords
    }
}

export default WordleSolver
