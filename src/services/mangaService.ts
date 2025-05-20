import { api } from "../api/apiClient";
import { IMangaListFilter } from "../models/Manga";

export async function mangaList(filter: IMangaListFilter) {
    filter.limit = filter.limit || 10
    return api.get('/manga', { params: filter })
}