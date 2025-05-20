import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MangaCard } from "../../components/MangaCard";
import { useHomeViewModel } from "./HomeViewModel";
import { createStyles } from "./styles";
import { useSettingsStore } from "../../stores/useSettingsStore";
import { useThemeStore } from "../../theme/useThemeStore";
import { useRouter } from "expo-router";

export function HomeView() {
  const { mangaList } = useHomeViewModel();
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
      <FlatList
        data={mangaList}
        key={colNumber}
        renderItem={({ item, index }) => {
          const isLastItem = index === mangaList.length - 1 && index % colNumber === 0; //Only when last item is not evenly divisible by colNumber
          return (
            <View style={isLastItem && styles.lastItemContainer} key={index}>
              <TouchableOpacity style={{ width: mangaWidth }} onPress={() => router.push(`/mangaDetails/${item.id}`)}>
                <MangaCard
                  url={item.imageUrl}
                  title={item.title}
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
