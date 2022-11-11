import { TmdbService } from '@/modules/tmdb/services/tmdb.service';
import { MessageService } from '@/modules/whastapp/service/message.service';
import { google } from '@google-cloud/dialogflow/build/protos/protos';

export class IntentService {
  constructor(private tmdb: TmdbService, private messageService: MessageService) {}

  async welcome(agent: google.cloud.dialogflow.v2.IDetectIntentResponse, phone: string) {}

  async fallback(agent: google.cloud.dialogflow.v2.IDetectIntentResponse, phone: string) {}

  async searchMovie(agent: google.cloud.dialogflow.v2.IDetectIntentResponse, phone: string) {}

  async moviesInTheaters(agent: google.cloud.dialogflow.v2.IDetectIntentResponse, phone: string) {}

  async popularMovies(agent: google.cloud.dialogflow.v2.IDetectIntentResponse, phone: string) {}
}
