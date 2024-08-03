//requiring another file from this directory to use objects/methods from there
const { PI, square } = require("./math");
const cats = require("./DirectoryImport");
console.log(PI);
console.log(square(9));
console.log(cats);
