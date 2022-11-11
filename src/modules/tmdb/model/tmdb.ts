export namespace Tmdb {
  export interface PaginatedResponse<T> {
    page: number;
    results: T[];
    total_pages: number;
    total_results: number;
  }

  export interface Movie {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  export interface PopularMovies extends PaginatedResponse<Movie> {}

  export interface PlayingNow extends PaginatedResponse<Movie> {}

  export namespace MovieSearch {
    export interface MovieSearchResult extends PaginatedResponse<Movie> {}

    export interface MovieSearchParams {
      query: string;
      page?: number;
      include_adult?: boolean;
      region?: string;
      year?: number;
      primary_release_year?: number;
    }
  }

  export namespace DiscoverMovie {
    export interface DiscoverMovieResult extends PaginatedResponse<Movie> {}
    export interface DiscoverMovieParams {
      page?: number;
      sort_by?: string;
      include_adult?: boolean;
      include_video?: boolean;
      release_date_gte?: string;
      release_date_lte?: string;
      year?: number;
    }
  }

  export namespace MovieImages {
    export interface Root {
      backdrops: Backdrop[];
      id: number;
      logos: Logo[];
      posters: Poster[];
    }

    interface Backdrop {
      aspect_ratio: number;
      height: number;
      iso_639_1?: string;
      file_path: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }

    interface Logo {
      aspect_ratio: number;
      height: number;
      iso_639_1: string;
      file_path: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }

    interface Poster {
      aspect_ratio: number;
      height: number;
      iso_639_1?: string;
      file_path: string;
      vote_average: number;
      vote_count: number;
      width: number;
    }
  }

  export namespace MovieProviders {
    export interface Root {
      id: number;
      results?: Results;
    }

    interface Results {
      BR?: Br;
    }

    interface Br {
      link?: string;
      flatrate?: Flatrate[];
      rent?: Rent[];
      buy?: Buy[];
    }

    interface Flatrate {
      logo_path: string;
      provider_id: number;
      provider_name: string;
      display_priority: number;
    }

    interface Rent {
      logo_path: string;
      provider_id: number;
      provider_name: string;
      display_priority: number;
    }

    interface Buy {
      logo_path: string;
      provider_id: number;
      provider_name: string;
      display_priority: number;
    }
  }

  export namespace MovieDetails {
    export interface Root {
      adult: boolean;
      backdrop_path?: string;
      belongs_to_collection: BelongsToCollection;
      budget: number;
      genres: Genre[];
      homepage: string;
      id: number;
      imdb_id: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      production_companies: ProductionCompany[];
      production_countries: ProductionCountry[];
      release_date: string;
      revenue: number;
      runtime: number;
      spoken_languages: SpokenLanguage[];
      status: string;
      tagline: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }

    interface BelongsToCollection {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    }

    interface Genre {
      id: number;
      name: string;
    }

    interface ProductionCompany {
      id: number;
      logo_path?: string;
      name: string;
      origin_country: string;
    }

    interface ProductionCountry {
      iso_3166_1: string;
      name: string;
    }

    interface SpokenLanguage {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  }
}
