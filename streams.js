const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blog1.txt");

// readStream.on("data", (chunk) => {
//   console.log("chunk data");
// //   console.log(chunk);

//   writeStream.write(chunk);
// });


//pipe

readStream.pipe(writeStream);