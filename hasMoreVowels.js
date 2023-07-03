/*Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true:*/
function hasMoreVowels(word){
  let vowelCount = 0;
  let nonVowelCount = 0;
  for (let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase();
    if (char === 'a' || char === "e"|| char === 'i'|| char === 'o'|| char === 'u'){
      vowelCount++;
    }else {
      nonVowelCount++;
    }

    }
    if(vowelCount > nonVowelCount){
      return true;
    } else{
      return false;
    }
  }
console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('Aal'))
console.log(hasMoreVowels('graph'))



