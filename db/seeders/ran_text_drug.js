const fs = require('fs').promises;

const fileQuestion = fs.readFile(
  `/ran_text_drug.txt`,
  "utf-8"
)
console.log(fileQuestion);
// fs.readFile('/db/seeders/drugs.txt', 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });

// const readDir = fs.readdir("./topics");
// console.log(readDir);
