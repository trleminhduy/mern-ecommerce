const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
app.use(express.json()); //dòng này để express đọc hiểu data mà client gửi lên (đọc theo kiể json)
app.use(express.urlencoded({ extended: true })); // giúp đọc được data dưới dạng, urlencoded

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
