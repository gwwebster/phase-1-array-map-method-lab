const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  let titleCasedArray= tutorials.map(title => {
    let arrayOfSeparatedTitle = title.split(' ')
    let capitalizedTitle = arrayOfSeparatedTitle.map(word => {
      return word[0].toUpperCase() + word.slice(1)
    })
    return capitalizedTitle.join(' ')
  })
  return titleCasedArray
}

// Below is a version of above function that accepts a string as an argument instead of an array of strings
//const str = "this string is a test"
//function foo (string) {
//   let arrayOfSeparatedWords = string.split(' ')
//   let capitalizedArray = arrayOfSeparatedWords.map(word => {
//     return word[0].toUpperCase() + word.slice(1)
//   })
//   return capitalizedArray.join(' ')
// }