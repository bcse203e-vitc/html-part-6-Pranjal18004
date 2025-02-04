function isPangram(sentence) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerCaseSentence = sentence.toLowerCase();
    for (let char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return "❌ It is not a pangram.";
        }
    }
    return "✅ It is a pangram.";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
