function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  const userInput = prompt("Enter a sentence:"); 
  const reversedResult = reverseWordsInSentence(userInput);
  console.log(reversedResult);
  