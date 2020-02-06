// import { SpellOut } from "./SpellOut.js";
const { SpellOut } = require("./SpellOut.js");
const sampledata = [
    // "0",
    // "12",
    // "32645732",
    // "15000",
    // "111111",
    // "76435730",
    // "121212123",
    // "12345678"
    // "a"
    "12, 23, 456"
];

sampledata.forEach((s) => {
    console.log(`${s} => "${SpellOut(s, "U")}"`);
    console.log(`${s} => "${SpellOut(s, "I")}"`);
});
