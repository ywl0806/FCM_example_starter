import { Request, Response } from "express";
import { messaging } from "firebase-admin";

const users: Set<string> = new Set<string>();

export const subscribe = async (req: Request, res: Response) => {
  const { token }: { token: string } = req.body ?? {};
  users.add(token);

  res.send("Subscribe to Notifications");
};

interface MessageType {
  title: string;
  body: string;
  imageUrl?: string;
}
export const sendMessage = async (req: Request, res: Response) => {
  const { title, body, ...rest }: MessageType = req.body ?? {};
  try {
    const result = await messaging().sendMulticast({
      data: { title, body, ...rest },
      notification: { title, body },
      tokens: [...users.values()],
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
