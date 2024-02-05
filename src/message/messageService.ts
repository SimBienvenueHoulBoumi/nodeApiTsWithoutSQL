import { MessageDto } from "./dto/messageDto";
import * as data from "../data/dataInitialisation.json";

const createMessage = async (message: MessageDto) => {
  try {
    if (!message.title || !message.body) {
      throw new Error("Invalid message format. Title and body are required.");
    }

    const newMessage: MessageDto = {
      title: message.title,
      body: message.body,
    };

    data.messages.push(newMessage);

    return newMessage;
  } catch (e: any) {
    console.error("Error creating message:", e.message);
    return null;
  }
};

const getAllMessages = async () => {
  return data.messages;
};

export { createMessage, getAllMessages };
