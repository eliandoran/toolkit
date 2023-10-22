export function stringToArray(inputText) {
    const binaryArray = [];

    for (let i=0; i<inputText.length; i++) {
        const ch = inputText[i];
        if (ch === '1') {                
            binaryArray.push(true);
        } else if (ch === '0') {
            binaryArray.push(false);
        } else {
            throw new Error("Invalid value.");
        }
    }

    return binaryArray;
}

function arrayToString(inputArray) {
    return inputArray.map((el) => el ? "1" : "0").join("");
}

export function makeSameLength(firstNumberArray, secondNumberArray) {
    if (firstNumberArray.length == secondNumberArray.length) {
        return;
    }

    let smallerArray;
    let largerArray;

    if (firstNumberArray.length > secondNumberArray.length) {
        largerArray = firstNumberArray;
        smallerArray = secondNumberArray;
    } else {
        largerArray = secondNumberArray;
        smallerArray = firstNumberArray;
    }

    const n = (largerArray.length - smallerArray.length);
    for (let i = 0; i<n; i++) {
        smallerArray.unshift(false);
    }        
}

function applyBitwiseOperation(firstNumberArray, secondNumberArray, operation) {
    const result = [];
    for (let i=0; i < firstNumberArray.length; i++) {
        result[i] = operation(firstNumberArray[i], secondNumberArray[i]);
    }
    return arrayToString(result);
}

export function applyBitshiftOperation(number, shiftBy) {
    const numberArray = stringToArray(number);
    
    for (let i=0; i<shiftBy; i++) {
        numberArray.push(0);
    }

    return arrayToString(numberArray);
}

export function getCommonBitwiseOperations(firstNumberArray, secondNumberArray) {
    return {
        orResult: applyBitwiseOperation(firstNumberArray, secondNumberArray, (a, b) => a || b),
        andResult: applyBitwiseOperation(firstNumberArray, secondNumberArray, (a, b) => a && b),
        xorResult: applyBitwiseOperation(firstNumberArray, secondNumberArray, (a, b) => a ^ b)
    };
}