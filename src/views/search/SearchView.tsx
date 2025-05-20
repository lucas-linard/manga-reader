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
  const { FilterManga } = useSearchViewModel();
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
    </View>
  );
}
