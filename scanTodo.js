var fs = require('fs');
var path = require('path');

/**
 * scan directory recursively for all sub-directory & files
 * @param {string} dirPath 
 * @param {string[]} checkedFilesList 
 * @returns {string[]} 
 */
const scanDirTodo = function (dirPath, checkedFilesList) {
    const files = fs.readdirSync(dirPath);
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            checkedFilesList = scanDirTodo(dirPath + "/" + file, checkedFilesList);
        } else {
            const filePath = path.join(dirPath, "/", file);
            const fileData = fs.readFileSync(filePath, 'utf8')
            if (checkTodoExist(fileData) && filePath !== __filename)
                checkedFilesList.push(filePath);
        }
    })

    return checkedFilesList;
}

/**
 * check "TODO" keyword exist inside content
 * @param {string} data 
 * @returns {boolean}
 */
const checkTodoExist = function (data) {
    if (/TODO/i.test(data)) return true;
    return false;
}

//// run ////

try {
    let output = scanDirTodo (__dirname, []);
    output.forEach(function(file) {
        console.log(file);
    });
} catch (e) {
    console.log(e);
}