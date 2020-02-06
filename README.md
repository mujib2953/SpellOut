# SpellOut

This will help convert number to its alphabetical equivalent form.

Example:
```javascript
const { SpellOut } = require("spell-out");

SpellOut(12345678); // -- One Crore Twenty Three Lakh Fourty Five Thousand Six Hundred Seventy Eight

SpellOut("12345678"); // -- One Crore Twenty Three Lakh Fourty Five Thousand Six Hundred Seventy Eight

```

Example with `format` parameter:
- By default `format` is set to **`I`**, which stands for **INDIAN FORMAT**
- So we don't have to pass it if we want output in indian format.
- Other option for `format` is **`U`**, which stands for **INTERNATIONAL FORMAT**
- Below code depicts the same example as above but with "**U**" format.
```javascript
SpellOut("12345678", "U"); // --- Twelve Million Three Hundred and Forty Five Thousand Six Hundred and Seventy Eight
```

TODOs:
- [x] USD output format _(This is completed planned in next released)_
- [x] Support for comma seperated numbers, like **12,345,678** or **1,23,45,678** (Will be released in the next release.)
- [ ] Instead of second argument as number, will ask an object. So that we can have multiple options in an object. Currently we are asking for `format`
- [ ] Add support for languages.
- [ ] Support for larger number till `Number.MAX_SAFE_INTEGER`

### Bugs
- [External Bugs](https://github.com/mujib2953/SpellOut/issues) raised by other github user.
- [Internal Bugs](https://github.com/mujib2953/SpellOut/blob/master/bugList.md) found in internal testing.

# App
Author: Mujibur Rehman
