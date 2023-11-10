const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

rl.question("Enter a filename: ", function (userInput) {
  if (userInput) {
    const fileExtension = getFileExtension(userInput);
    if (fileExtension) {
      console.log(`The file extension is: ${fileExtension}`);
    } else {
      console.log("The file has no extension or the filename is not valid.");
    }
    rl.close();
  } else {
    console.log("No filename entered. Please try again.");
    rl.close();
  }
});
