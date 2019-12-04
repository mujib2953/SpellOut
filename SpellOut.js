/*
* Author: Mujibur Rehman (adna_coder)
* email: ansarimujiburrehman@gmail.com
* version: 0.3
* created date: 28-Nov-2019
* updated date: 02-Dec-2019
*/

/*
* This will convert the number to its equivalent alphabetical form
* @param amount (number)
* @param format (string) possible values { "IS", "IIS" } default "IS"
* @return displayText (String)
*/
const SpellOut = function(amount) {

    if (typeof amount !== "number") {
        const errorMessage = "Input Error: " + amount + " is not a number.";
        throw new Error(errorMessage);
    }

    const repo = {
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
        40: "Fourty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety"
    }

    const pos = ["", "Hundred", "Thousand", "Lakh", "Crore", "Arab", "Kharab"];

    /* 
    * This will return the number in alphabet
    * like 24 => Twenty Four
    * @param: number: Number type
    * @return: string
    */
    const getAlphaNumber = (number) => {

        if (number <= 20) {
            return repo[number];
        }

        const numberArray = number.toString().split("");
        const smallerDigit = Number(numberArray[1]);
        const graterDigit = Number(numberArray[0]);

        return (smallerDigit !== 0) ? 
            `${repo[graterDigit * 10]} ${repo[smallerDigit]}` :
            `${repo[graterDigit * 10]}`;
    }

    if (amount === 0) {
        return repo[amount];
    }

    let displayText = "";
    let iterationCount = 0;

    while(amount !== 0) {
        const modulusFactor = (iterationCount === 1) ? 10 : 100;
        const doubleDigit = amount % modulusFactor;
        const inWords = getAlphaNumber(doubleDigit);

        if (doubleDigit !== 0) {
            displayText = `${inWords} ${pos[iterationCount] ? pos[iterationCount] : ""} ${displayText}`;
        } else {
            displayText = `${displayText}`;
        }
        
        amount = parseInt(amount/modulusFactor);

        iterationCount++;
    }

    return displayText;
};

module.exports = { SpellOut };