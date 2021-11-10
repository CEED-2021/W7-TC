const GENERATED_ARRAY_LENGTH = 10;
const MAX_RANDOM_NUMBER = 10;

// ------------------------------------------
// Generate random numbers
// ------------------------------------------
let randomNumbers = [];

for( let i=0; i<GENERATED_ARRAY_LENGTH; i++ ) {
  let randomNumber = Math.floor(Math.random() * (MAX_RANDOM_NUMBER+1));

  randomNumbers.push(randomNumber);
}

// We can also initialize an array passing a length and a function to 'Array.from'
/*
let randomNumbers = Array.from(
  {length: GENERATED_ARRAY_LENGTH},
  () => Math.floor(Math.random() * (MAX_RANDOM_NUMBER+1))
);
*/

// ------------------------------------------
// Compute frequency for each number
// ------------------------------------------
// We have elements from zero to MAX_RANDOM_NUMBER, so length = MAX_RANDOM_NUMBER + 1
const frequencies = Array(MAX_RANDOM_NUMBER + 1).fill(0);

for ( number of randomNumbers) {
  frequencies[number] += 1;
}

// ------------------------------------------
// Obtain the maximum frequency
// ------------------------------------------
let maxFrequency = 0;

for ( frequency of frequencies ) {
  if (frequency > maxFrequency) maxFrequency = frequency;
}
// Or we could use this to replace the entire loop (introduced in W2):
// let maxFrequency = Math.max(...frequencies);

// ------------------------------------------
// Obtain the mode
// ------------------------------------------
let mode = [] // We can have multimodal data (two numbers with the same frequency)

// Get numbers with frequency = maxFrequency
for (index in frequencies) {
  if ( frequencies[index] === maxFrequency ) mode.push(index);
}




