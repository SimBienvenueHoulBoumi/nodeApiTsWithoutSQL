import express from "express";

import { createMessage, getAllMessages } from "./messageService";

let messageRouter = express.Router();

messageRouter.post("/create", async (req, res) => {
  const message = req.body;
  const newMessage = await createMessage(message);
  res.status(201).send(newMessage);
});

messageRouter.get("/all", async (req, res) => {
  const messages = await getAllMessages();
  res.status(200).send(messages);
});

export default messageRouter;
