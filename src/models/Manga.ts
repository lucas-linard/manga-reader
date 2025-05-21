export interface IMangaListFilter {
    title?: string;
    limit?: number; //default 10
    includes?: EMangaIncludes[]; //default ['cover', 'chapters']
}

export enum EMangaIncludes {
    manga = 'manga',
    COVER_ART = 'cover_art',
    AUTHOR = 'author',
    ARTIST = 'artist',
    TAG = 'tag',
    CREATOR = 'creator',
    // Add other includes as needed
}

export interface MangaResponse {
  result: string;
  response: string;
  data: Manga[];
  limit: number;
  offset: number;
  total: number;
}

export interface Manga {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships: Relationship[];
}

export interface MangaAttributes {
  title: LocalizedText;
  altTitles: LocalizedText[];
  description: LocalizedText;
  isLocked: boolean;
  links: MangaLinks;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year: number;
  contentRating: string;
  tags: Tag[];
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: string;
  updatedAt: string;
  version: number;
  availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

export interface LocalizedText {
  [languageCode: string]: string;
}

export interface MangaLinks {
  al?: string;
  ap?: string;
  bw?: string;
  kt?: string;
  mu?: string;
  amz?: string;
  cdj?: string;
  ebj?: string;
  mal?: string;
  raw?: string;
  engtl?: string;
  [key: string]: string | undefined;
}

export interface Tag {
  id: string;
  type: string;
  attributes: TagAttributes;
  relationships: any[];
}

export interface TagAttributes {
  name: LocalizedText;
  description: LocalizedText;
  group: string;
  version: number;
}

export interface Relationship {
  id: string;
  type: string;
  related?: string;
  attributes?: CoverArtAttributes;
}

export interface CoverArtAttributes {
  description: string;
  volume: string;
  fileName: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
  version: number;
}
