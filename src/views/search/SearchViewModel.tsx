import { useState } from "react";
import { Manga } from "../../models/Manga";
import { mangaListMock } from "./mock";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { Dimensions } from "react-native";
import { getMangaList } from "../../services/mangaService";
export function useSearchViewModel() {
  const [mangaList, setMangaList] = useState<Manga[]>(mangaListMock);

  // useEffect(() => {
  //     const fetchManga = async () => {
  //     try {
  //         const response = await fetch("https://api.example.com/manga"); // Replace with your API endpoint
  //         const data = await response.json();
  //         setMangaList(data);
  //     } catch (error) {
  //         console.error("Error fetching manga:", error);
  //     }
  //     };

  //     fetchManga();
  // }, []);

  async function FilterManga(title: string) {
    try {
      const manga = await getMangaList({ title });
      console.log("Manga", JSON.stringify(manga.data));
      setMangaList(manga.data);
    } catch (error) {
      console.error("Error fetching manga:", error);
    }
  }

  return { FilterManga, mangaList };
}
