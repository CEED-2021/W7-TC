const GENERATED_ARRAY_LENGTH = 10;
const MAX_RANDOM_NUMBER = 10;

const { randomNumbers } = require('./randomNumbers.js')
const { moda } = require('./moda.js')

const random = randomNumbers(GENERATED_ARRAY_LENGTH, MAX_RANDOM_NUMBER)
const mode = moda(random, MAX_RANDOM_NUMBER);

console.log(`Data: [${random.join(',')}]`);
console.log(`Mode: [${mode.join(',')}]`);