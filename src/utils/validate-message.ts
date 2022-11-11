import WAWebJS from 'whatsapp-web.js';

export const validateMessage = async (msg: WAWebJS.Message): Promise<boolean> => {
  if (msg.hasMedia) return false;

  const chat = await msg.getChat();

  if (chat.isGroup) return false;

  const [phoneNumber] = msg.from.split('@');

  if (phoneNumber !== process.env.PHONE_TO_RESPONSE) return false;

  return true;
};
