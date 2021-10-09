const { readFileSync, writeFileSync } = require("fs");

// readFileSync(path, options)
console.log('Start >>>>');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync (file name, value)
// override the contents if the file is already there, otherwise create a new file.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('Done with this task');
console.log('Starting the next one');
