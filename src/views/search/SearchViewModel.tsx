import { useState } from "react";
import { Manga } from "../../models/Manga";
import { mangaListMock } from "./mock";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { Dimensions } from "react-native";

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

  return { mangaList };
}
