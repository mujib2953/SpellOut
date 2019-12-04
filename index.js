// import { SpellOut } from "./SpellOut.js";
const { SpellOut } = require("./SpellOut.js");
let text = 0;

let sampledata = [
    "0",
    "12",
    "32645732",
    "15000",
    "111111",
    "76435730",
    "121212123",
];

sampledata.forEach((s) => {
    console.log(`${s} => ${SpellOut(Number(s))}`);
    console.log(`${s} => ${SpellOut(Number(s), "IIS")}`);
});
