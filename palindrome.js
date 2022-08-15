/*
~JH 
Weekly Coding Challenge: 
==========================================================================
Palindrome 
Given a word, 
create a function 
that returns T/F

whether or not it's possible to create a palindrome 
by rearranging the letters in the word.

Examples: 
---------------------------------------------
isPalindromePossible("rearcac") ➞ true

isPalindromePossible("suhbeusheff") ➞ true

isPalindromePossible("palindrome") ➞ false

Notes:
-------------------- 
Trivially, words that are already palindromes return true.
	
Words are given in all lowercase.
*/
const Palindrome = (inp)=> {
    let strIn = inp.toLowerCase();
    //return early if they only passed in 1 letter:
    if (strIn.length <= 1){console.error('you only entered 1 letter'); return false;} 
    //begin processing input:
    const charCount = strIn.split('').reduce((counter, ch) => ({
      ...counter,
      [ch]: (counter[ch] || 0) + 1
    }), {});
    //put reduced input into new array:
    const parts = ['', '', ''];
    const entries = Object.entries(charCount);

    //loop through that array, check for nulls and odds:
    for (let i = 0; i < entries.length; ++i) {
      const [char, counter] = entries[i];
      if (counter % 2) { //* odd
        if (parts[1] !== '') return false;
        parts[1] = char.repeat(counter);
      } 
      //it's even, so re-order the string:
      else { //* even
        const half = counter / 2;
        //assign to parts array:
        parts[0] = char.repeat(half) + parts[0];
        parts[2] += char.repeat(half);
      }
    } //exit for loop
    return true; // if we get here, it's a palindrome.
  }
  
let testRes = Palindrome?': passed' : ': failed';

  console.log('BEGINNING Palindrome TEST SUITE:')
  console.log('case 1: returned: '+ Palindrome("rearcac")+' '+ testRes);      //pass  T
  console.log('case 2: returned: '+ Palindrome("REARcac")+' '+testRes);     //pass   T
  console.log('case 3: returned: '+ Palindrome("suhBEUsheff")+' '+testRes); //pass   T
  console.log('case 4: returned: '+ Palindrome("paLIndrome")+' '+testRes); //pass    F
  console.log('case 5: returned: '+ Palindrome("r")+' '+testRes);         //pass     F,   error


