const fs = require("fs");

//  Task 3a - creating "welcome.txt" file
fs.writeFile("./welcome.txt", "Hello Node", () => {
  console.log("File written");
});

// Task 3b - reading the content of the "welcome.txt" file
const reader = fs.readFile("./welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:");
  } else {
    console.log(data);
  }
});
