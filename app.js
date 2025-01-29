const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
app.set("view engine", "ejs");
// app.set('views','pages'); -> this can change the default path views to some other

app.listen(3000);

const dbUrl = `mongodb+srv://kishore:Kishore123@learnnode.6gauv.mongodb.net/?retryWrites=true&w=majority&appName=learnnode`;

// Connect to MongoDB
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://kishore:Kishore123@learnnode.6gauv.mongodb.net/?retryWrites=true&w=majority&appName=learnnode`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


// app.get("/", (req, res) => {
//   res.send("<p>this is dummy text </p>");
// });

// // send files response

// app.get("/about", (req, res) => {
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// // redirect

// app.get("/about-us", (req, res) => {
//   res.redirect("about");
// });

// // 404

// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });

// middleware sample

// app.use((req, res, next) => {
//   console.log("new request made");
//   next(); // this tells the espress to move to next
// });

// third party middleware
app.use(morgan("dev"));

// making files static (public)

app.use(express.static("public")); // it makes all the files under this folder can be accessable form the browser

// view engine example
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// send files response

app.get("/about", (req, res) => {
  const blogs = [
    { title: "test 1", text: "sample text" },
    { title: "test 2", text: "sample text" },
    { title: "test 2", text: "sample text" },
  ];
  res.render("about", { blogs, title: "About" });
});

// redirect

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

// 404

app.use((req, res) => {
  res.status(404).render("404");
});
