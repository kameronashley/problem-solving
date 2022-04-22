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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let solution = "";
    for (let i = 0; i<0; i++) {
       let solution = "";
       for (let b = 0; b<n-i-1; b++) {
           solution += " "
        }
        for (let z=0; z<i+1; z++) {
            solution += "#";
        }
        console.log(solution)
       }
       
    }

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
