## Instruction
This software to scan recursively for all files under the current directory to find pattern `TODO` and output the absolute path of file which exists `TODO`.

## Install
Install [Nodejs](https://nodejs.org/en/download/)

## Run
Copy the script scanTodo.js to any folder, then run:
```
node scanTodo.js
```

## Test
**TestData** folder include test cases

## Enhancement plan
1. Only search for `TODO` inside comment
2. Only search for `TODO` full text
3. Only scan inside code (js, ts, css, html) 
4. Output to CSV or other output method
5. Output `TODO` count per file & sort


## License
MIT