import express from "express";

import "dotenv/config";

let port = process.env.PORT;

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
