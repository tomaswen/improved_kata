// const squareCode = function(message) {
const extractor = function(array, index) {
  let result = '';
  array.forEach(charAt => {
    if (charAt[index]) {
      result += charAt[index];
    }
  });
  return result;
};
const squareCode = function(message) {
  let coded = [];
  let results = '';
  let newMessage =  message.replace(/\s+/g, '');
  let count = Math.ceil(Math.sqrt(newMessage.length));
  let segmented = [];
  for (let i = 0; i < newMessage.length; i += count) {
    segmented.push(newMessage.substring(i,i + count));
  }
  for (let segmentedWord of segmented) {
    for (let index in segmentedWord) {
      coded[index] = extractor(segmented,index);
    }
  }
  results = coded.join(' ');
  return results;
};
  
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
