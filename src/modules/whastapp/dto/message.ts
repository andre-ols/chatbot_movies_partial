export interface SendListDto {
  title: string;

  rows: Array<{
    title: string;
    id: string;
  }>;
}

export interface SendButtonDto {
  title: string;

  buttons: Array<{ body: string; id: string }>;
}
