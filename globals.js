// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules ( CommonJS )
// module - info about the current module (file)
// process - info about env where the program is being executed

// console.log('Dirname >>> ', __dirname);
// console.log('Filename >>> ',__filename);
// console.log('Require >>> ', require);
// console.log('Process >>> ', process);
// console.log('Module >>> ', module);
const percentages = [
  10, 15, 45, 50, 52, 60, 61, 70, 78, 79, 80, 82, 83, 88, 92, 96, 97, 98, 100,
];

percentages.forEach((item) => {
  if (item == 100) {
    console.log(`${item}% >> Operation successfull, We are in!!`);
  } else {
    console.log(`Hacking NASA ${item}% completed`);
  }
});
