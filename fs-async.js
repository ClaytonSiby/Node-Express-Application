const { readFile, writeFile } = require("fs");

console.log('Starting process >>>: ');
readFile("./content/first.txt", "utf8", (err, firstResult) => {
  if (err){
    console.log(err);
    return;
  };

  const first = firstResult;

  readFile("./content/second.txt", "utf8", (err, secondResult) => {
    if (err) {
      console.log(err);
      return;
    };

    const second = secondResult;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        };
        console.log('Done with this task');
      }
    );
  });
});

console.log('Starting a new task...');
