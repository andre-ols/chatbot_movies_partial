import { IntentService } from '../modules/dialogflow/services/intent.service';
import { TmdbService } from '..//modules/tmdb/services/tmdb.service';
import { MessageService } from '../modules/whastapp/service/message.service';

const tmdbService = new TmdbService(process.env.TMDB_API_KEY?.toString()!);
const messageService = new MessageService();

const intentService = new IntentService(tmdbService, messageService);

export { tmdbService, messageService, intentService };
