import { Buttons, List, MessageMedia } from 'whatsapp-web.js';
import { SendButtonDto, SendListDto } from '../dto/message';
import client from '../setup';

export class MessageService {
  constructor() {}

  async sendTextMessage(message: string, phone: string) {
    await client.sendMessage(phone, message);
  }

  async sendMediaMessage(url: string, message: string, phone: string) {
    const media = await MessageMedia.fromUrl(url);
    await client.sendMessage(phone, media, { caption: message });
  }

  async sendListMessage(dto: SendListDto, phone: string) {
    try {
      const sections = [
        {
          title: dto.title,
          rows: dto.rows,
        },
      ];

      const list = new List(dto.title, 'Ver filmes', sections);
      await client.sendMessage(phone, list);
    } catch (e) {
      console.log(e);
    }
  }

  async sendButton(dto: SendButtonDto, phone: string) {
    const buttons = new Buttons(dto.title, dto.buttons);
    await client.sendMessage(phone, buttons);
  }
}
