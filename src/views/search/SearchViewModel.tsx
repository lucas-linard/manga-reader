import { useState } from "react";
import { EMangaIncludes, Manga } from "../../models/Manga";
import { getMangaList } from "../../services/mangaService";
export function useSearchViewModel() {
  const [mangaList, setMangaList] = useState<Manga[]>([]);


  async function FilterManga(title: string) {
    try {
      const manga = await getMangaList({ title, includes: [EMangaIncludes.COVER_ART] });
      setMangaList(manga.data.data);
    } catch (error) {
      console.error("Error fetching manga:", error);
    }
  }

  return { FilterManga, mangaList };
}
