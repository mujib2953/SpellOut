/*
* Author: Mujibur Rehman (adna_coder)
* email: ansarimujiburrehman@gmail.com
* version: 0.3
* created date: 28-Nov-2019
* updated date: 24-Dec-2019
*/

/*
* This will convert the number to its equivalent alphabetical form
* @param amount (number)
* @param format (string) possible values { "I", "U" } default "I"
* @return displayText (String)
*/
const INDIAN_FORMAT = "I";
const INTERNATIONAL_FORMAT = "U";

const SpellOut = function(input, format = INDIAN_FORMAT) {

    let amount = Number(input);

    if (Number.isNaN(amount)) {
        const errorMessage = "Input Error: " + input + " is not a number.";
        throw new Error(errorMessage);
    }

    const wordsRepo = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",

        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",

        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety"
    };

    const indianPlaces = ["", "Hundred", "Thousand", "Lacs", "Crore", "Arab", "Kharab"];
    const intlPlaces = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion"];

    /* 
    * This will return the number in alphabet
    * like 24 => Twenty Four
    * @param: number: Number type
    * @return: string
    */
    const getAlphaNumber = (number) => {

        if (number <= 20) {
            return wordsRepo[number];
        }

        const numberArray = number.toString().split("");
        if (numberArray.length === 2) {
            const smallerDigit = Number(numberArray[1]);
            const graterDigit = Number(numberArray[0]);

            return (smallerDigit !== 0) ?
                `${wordsRepo[graterDigit * 10]} ${wordsRepo[smallerDigit]}` :
                `${wordsRepo[graterDigit * 10]}`;
        } else {
            const smallerDigit = Number(numberArray[2]);
            const middleDigit = Number(numberArray[1]);
            const graterDigit = Number(numberArray[0]);

            // --- smallest 0 --- 120
            if (smallerDigit === 0) {
                return `${wordsRepo[graterDigit]} Hundred and ${wordsRepo[middleDigit * 10]}`
            } else {
                const twoDigitNumber = getAlphaNumber((middleDigit * 10) + smallerDigit );
                return `${wordsRepo[graterDigit]} Hundred and ${twoDigitNumber}`;
            }
        }
    };

    if (amount === 0) {
        return wordsRepo[amount];
    }

    let displayText = "";
    let iterationCount = 0;

    while(amount !== 0) {
        const modulusFactor = (format === INTERNATIONAL_FORMAT) ? 1000 : (iterationCount === 1) ? 10 : 100;
        const doubleDigit = amount % modulusFactor;
        const inWords = getAlphaNumber(doubleDigit);

        if (doubleDigit !== 0) {
            const displayValue = (format === INTERNATIONAL_FORMAT) ? intlPlaces[iterationCount] : indianPlaces[iterationCount];

            displayText = `${inWords} ${displayValue ? displayValue : ""} ${displayText}`;
        } else {
            displayText = `${displayText}`;
        }
        
        amount = parseInt(amount/modulusFactor);
        iterationCount++;
    }

    return displayText.trim();
};

module.exports = { SpellOut };