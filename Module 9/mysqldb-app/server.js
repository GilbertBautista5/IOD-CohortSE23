const express = require("express");
const app = express();

require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');

// parse requests of content-type -application/json
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Welcome to MySQL DB application." });
});

app.use('/api/users', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});