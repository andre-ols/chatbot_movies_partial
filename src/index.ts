import { config } from 'dotenv';
config();

import WAWebJS, { Buttons } from 'whatsapp-web.js';
import { SendBotDto } from './modules/dialogflow/dto/send-to-bot';
import client from './modules/whastapp/setup';
import { messageService, tmdbService } from './service';

client.initialize();

const handleList = async (msg: WAWebJS.Message) => {};

const handleButton = async (msg: WAWebJS.Message) => {};

export const handleDialogflow = async (dto: SendBotDto) => {};

client.on('message', async (msg) => {});
