/**
 * @description: This will validate if the given number/string have any of the supported separator.
 * @param: number: any type (Number, String or other...)
 * @returns: number: string type
 * **/
const separateNumber = (number, separatorArray) => {
    if (number.indexOf(separatorArray[0] !== -1)) {
        return number.split(separatorArray[0]).map(s => s.trim()).join("");
    } else if (number.indexOf(separatorArray[1] !== -1)) {
        return number.split(separatorArray[1]).map(s => s.trim()).join("");
    }
    return number;
};

module.exports = { separateNumber };