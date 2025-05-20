import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MangaCard } from "../../components/MangaCard";
import { useSearchViewModel } from "./SearchViewModel";
import { createStyles } from "./styles";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { useThemeStore } from "../../theme/useThemeStore";
import { useRouter } from "expo-router";

export function SearchView() {
  const { mangaList } = useSearchViewModel();
  const { theme } = useThemeStore();
  const styles = createStyles(theme);

  const { settings } = useSettingsStore();
  const colNumber = settings.mangaGrid;
  const mangaWidth = getMangaWidth(colNumber);

  const router = useRouter();

  function getMangaWidth(colNumber: number) {
    const screenWidth = Dimensions.get("window").width;
    const cardMargin = screenWidth * 0.08;
    return (screenWidth - cardMargin * colNumber) / colNumber;
  }

  return (
    <View style={styles.container}>
      
    </View>
  );
}
