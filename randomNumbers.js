function randomNumbers(length, maxRandomNumber) {
    // ------------------------------------------
    // Generate random numbers
    // ------------------------------------------
    let randomNumbers = [];

    for( let i=0; i<length; i++ ) {
        let randomNumber = Math.floor(Math.random() * (maxRandomNumber+1));

        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

module.exports = {
    randomNumbers
}