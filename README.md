# GIT Homework for Inventorsoft Academy

## Counting Anagrams

**Task description**:
Have the function take the _string_ parameter and determine how many anagrams exist in the string. An anagram is a new word that is produced from rearranging the characters in a different word, for example: **cars** and **arcs** are anagrams. Your program should determine how many anagrams exist in a given string and return the total number. For example: if _string_ is "cars are very cool so are arcs and my os" then your program should return **2** because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated. The string will contain only spaces and lowercase letters, no punctuation, numbers or uppercase letters.
**Examples**
Input: "_aa aa odg dog gdo_"
Output: 2

Input: "_a c b c run urn urn_"
Output: 1

## My thought process

The task was a little challenging for me, so I decided to write down my approach to solving it. First of all, I needed to come up with a main JavaScript function, that was going to count anagrams in a given string, and embed it into a simple HTML page with text input, button and event listener. So, my though process regarding an anagram finding function was the following:

- Split the string into an array with every word being a separate array item
- Somehow sort every letter in every word so the function could compare it
- Remove all duplicates from the array (because duplicates don't count as anagrams, as stated in challenge description)
- Count how many times sorted words duplicate (that would be a number of anagrams)

## Splitting the string

I've used a string `.split` method with a `" "` parameter to split a string into an array on every space (basically, every separate word) and assigned it to a variable.

## Sorting letters in words

That can be easily done with a number of String methods. We need to split the word into a separate letters, sort them alphabetically (which is by default) and form a word from separate letters. I've declared a helper function _alphabetize_, that accepts a _word_ parameter, and returns `word.split('').sort().join('')`.

## Removing duplicates

I've googled what is the best way to remove duplicates from an array, and encountered a way using a `Set` with a spread operator (`[...new Set()]`). So I created a Set from my initial array and saved it into another variable.

## Counting anagrams

Now that we have a Set with alphabetized words, we need to count how many anagrams it had before we started to work with it (basically, we need to count how many duplicates are there, because alphabetized anagrams are identical). One way to do it is removing duplicates from this Set one more time, and comparing it's length to initial Set's length (count how many duplicates were there before removing).
