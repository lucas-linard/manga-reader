import { AxiosResponse } from "axios";
import { api } from "../api/apiClient";
import { IMangaListFilter, MangaResponse } from "../models/Manga";

export async function getMangaList(filter: IMangaListFilter): Promise<AxiosResponse<MangaResponse, any>> {
    filter.limit = filter.limit || 10
    return api.get('/manga', { params: filter })
}