export interface Manga {
    id: number;
    title: string;
    imageUrl: string;
    // description: string;
    // rating: number;
    // genres: string[];
    // chapters: number;
    // status: string;

}

export interface IMangaListFilter {
    title?: string;
    limit?: number; //default 10
}