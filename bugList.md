# Bug List of SpellOut
This is the all bugs that have been fixed in the _**SpellOut**_ over a time and their status and also states in which version what bugs are fixed.


| ID | Step to Reproduce |Actual Output|Expected Output| Status | Released version |
|----|-------------------|-------------|---------------|--------|------------------|
| 01 | `SpellOut(630);` |`Thousand Six Hundred Thirty undefined`|`Six Hundred Thirty`|**FIXED**| _**0.0.3**_ |
| 02 | `SpellOut(0);` |` `|`Zero`|**FIXED**| _**0.1.0**_ |
| 03 | `SpellOut(15000);` |`Fifteen Thousand undefined Hundred undefined`|`Fifteen Thousand`|**FIXED**| _**0.1.0**_ |
| 04 | `SpellOut("0");` |Throws an error |`Zero`|**FIXED**| _**Upcoming release**_ |
| 05 | `SpellOut("12");` |`Twelve  ` (_some trailing spaces_) |`Twelve`|**FIXED**| _**Upcoming release**_ |
