import express from "express";

import "dotenv/config";

let port = process.env.PORT;

let app = express();

import messageRouter from "./src/message/messageController";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/message", messageRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
