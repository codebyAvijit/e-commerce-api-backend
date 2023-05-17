const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

const dataRoute = require("./src/router/dataRouter");

require("./src/db/conn");
// app.get("/", (req, res) => {
//   res.send("Hello from server");
// });

app.use(express.json());
app.use("/api/data", dataRoute);
app.listen(port, () => {
  console.log(`The Server is Up and Running on port ${port}`);
});
