import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MangaCard } from "../../components/MangaCard";
import { useSearchViewModel } from "./SearchViewModel";
import { createStyles } from "./styles";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { useThemeStore } from "../../theme/useThemeStore";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Input } from "../../components/Input";
import { useState } from "react";

export function SearchView() {
  const { mangaList, FilterManga } = useSearchViewModel();
  const { theme } = useThemeStore();
  const styles = createStyles(theme);

  const { settings } = useSettingsStore();
  const colNumber = settings.mangaGrid;
  const mangaWidth = getMangaWidth(colNumber);

  const router = useRouter();

  const [searchText, setSearchText] = useState("");

  function getMangaWidth(colNumber: number) {
    const screenWidth = Dimensions.get("window").width;
    const cardMargin = screenWidth * 0.08;
    return (screenWidth - cardMargin * colNumber) / colNumber;
  }

  return (
    <View style={styles.container}>
      <Input 
        icon={<Ionicons name="search" size={24} color={theme.colors.secondary} />}
        onPress={() => FilterManga(searchText)}
        placeholder="Search for manga"
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor={theme.colors.textDisabled}
      />

      <FlatList
        data={mangaList}
        key={colNumber}
        renderItem={({ item, index }) => {
          const isLastItem = index === mangaList.length - 1 && index % colNumber === 0; //Only when last item is not evenly divisible by colNumber
          const coverArt = item.relationships.find((r) => r.type === "cover_art");
          const coverArtUrl = `https://uploads.mangadex.org/covers/${item.id}/${coverArt?.attributes?.fileName}`; // Replace with actual URL
          
          return (
            <View style={isLastItem && styles.lastItemContainer} key={index}>
              <TouchableOpacity style={{ width: mangaWidth }} onPress={() => router.push(`/mangaDetails/${item.id}`)}>
                <MangaCard
                  url={coverArtUrl}
                  title={item.attributes.title['en']}
                  width={mangaWidth}
                  newPages={203}
                />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        numColumns={colNumber}
        columnWrapperStyle={styles.listContainer}
      />
    </View>
  );
}
