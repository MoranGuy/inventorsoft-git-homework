//Bringing elements from the DOM in JS
const input = document.querySelector('.input-field')
const btn = document.querySelector('.btn')
const message = document.querySelector('h3')

//Function that sorts letters in every word in alphabetical order
function alphabetize(word) {
  return word.split('').sort().join('')
}

//Main function on click
btn.addEventListener('click', () => {
  const str = input.value //assigning user input to a variable
  const words = str.split(' ') //creating an array from input string
  const filtered = [...new Set(words)] //making a set from an array to exclude duplicates ('cause duplicates don't count as an acronym)

  const alphabetized = filtered.map(word => alphabetize(word)) //alphabetizing every word to make it easier to check for acronyms

  const alphabetizedSet = [...new Set(alphabetized)] //making one more set so we could compare it to an initial array

  const count = alphabetized.length - alphabetizedSet.length //comparing new set with an initial one to find the amount of anagrams
  message.innerHTML = `Your sentence has ${count} anagrams!` //changing the message text to display new value

  input.value = '' //refreshing the input field
})
