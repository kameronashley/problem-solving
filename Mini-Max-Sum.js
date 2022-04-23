//Below is copy and pasted from the HackerRank entry screen

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Need to loop through the array and add up each element to the next
// Min and Max depend on where the loop starts in the SORTED array from least to greatest integer value

// Max could also be the min value plus the last value in the array MINUS the first value in the array
// ^^ This would save us some runtime complexity as to not have to run 2 loops

function miniMaxSum(arr) {
    let sorted = arr.sort()
    let min = 0
    let max = 0
    for (let i=0; i<sorted.length-1; i++) {
        min += sorted[i]
    }
    max = (min + sorted[4]) - sorted[0]
    console.log(min, max)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
