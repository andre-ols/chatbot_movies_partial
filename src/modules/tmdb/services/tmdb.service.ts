import axios from 'axios';
import { Tmdb } from '../model/tmdb';

export class TmdbService {
  private readonly apiBaseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private readonly apiKey: string, private readonly language: string = 'pt-BR') {}

  private async get<T>(
    path: string,
    params: Partial<Record<string, string | number | boolean>> = {},
  ): Promise<T> {
    const url = new URL(`${this.apiBaseUrl}${path}`);
    url.searchParams.append('language', this.language);

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, String(value));
    }

    const { data } = await axios.get(url.toString(), {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });

    return data;
  }

  async searchMovie(
    params: Tmdb.MovieSearch.MovieSearchParams,
  ): Promise<Tmdb.MovieSearch.MovieSearchResult> {
    return this.get('/search/movie', {
      ...params,
    });
  }

  async getMovie(id: number): Promise<Tmdb.Movie> {
    return this.get(`/movie/${id}`);
  }

  async getProviders(id: number): Promise<Tmdb.MovieProviders.Root> {
    return this.get(`/movie/${id}/watch/providers`);
  }

  async playingNow(): Promise<Tmdb.PlayingNow> {
    return this.get('/movie/now_playing?region=BR');
  }

  async popularMovies(): Promise<Tmdb.PopularMovies> {
    return this.get('/movie/popular?region=BR');
  }

  async getMovieImages(id: number): Promise<Tmdb.MovieImages.Root> {
    return this.get(`/movie/${id}/images`);
  }

  getUrlImage(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  async discoverMovie(
    params: Tmdb.DiscoverMovie.DiscoverMovieParams,
  ): Promise<Tmdb.DiscoverMovie.DiscoverMovieResult> {
    return this.get('/discover/movie', {
      ...params,
      'release_date.gte': params.release_date_gte,
      'release_date.lte': params.release_date_lte,
    });
  }
}
