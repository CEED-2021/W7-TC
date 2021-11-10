


function moda(randomNumbers, maxRandomNumber) {

    // ------------------------------------------
    // Compute frequency for each number
    // ------------------------------------------
    // We have elements from zero to MAX_RANDOM_NUMBER, so length = MAX_RANDOM_NUMBER + 1
    const frequencies = Array(maxRandomNumber + 1).fill(0);

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

    return mode;
}


// exponer una funcion que calcule la moda
module.exports  = {
    moda
}