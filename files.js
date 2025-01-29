const fs = require("fs");

// read files

// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log("err", err);
//   }

//   console.log(data.toString());
// });

// write files

// fs.writeFile("./docs/blog.txt", "Hello world", () => {
//   console.log("file rewritten");
// });

// delete files

// if (fs.existsSync("./docs/blog.txt")) {
//   fs.unlink("./docs/blog.txt", (err) => {
//     if (err) {
//       console.log("err", err);
//     }

//     console.log("file deleted");
//   });
// }

// directories

// create

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log("err", err);
//   }

//   console.log("folder created");
// });

// delete

fs.rmdir("./assets", (err) => {
  if (err) {
    console.log("err", err);
  }

  console.log("folder deleted");
});
