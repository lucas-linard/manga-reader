import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useThemeStore } from "../../theme/useThemeStore";
import { createStyles } from "./styles";
import { MangaCard } from "../../components/MangaCard";
import { mangaMock } from "./mock";
import { useCallback, useEffect, useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { ExpandableText } from "../../components/ExpandableText";

interface IIconButtonProps {
  icon: string;
  text: string;
  onPress: () => void;
}

interface IListIconProps {
  name: string;
  date: string;
  read: boolean;
}

export function MangaDetailsView() {
  const localParams = useLocalSearchParams();
  const theme = useThemeStore((state) => state.theme);
  const styles = createStyles(theme);
  const [manga, setManga] = useState<any>();

  function getMangaDetails(mangaId: string) {
    return mangaMock;
  }

  useEffect(() => {
    const mangaId = localParams.id as string;
    const mangaDetails = getMangaDetails(mangaId);
    setManga(mangaDetails);
  }, [manga]);

  if (!manga) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  function IconButton({ icon, text, onPress }: IIconButtonProps) {
    return (
      <TouchableOpacity style={styles.actionItemContainer} onPress={onPress}>
        <FontAwesome6
          name={icon}
          size={24}
          color={theme.colors.textSecondary}
        />

        <Text style={styles.actionItemText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  function ChapterItem(props: IListIconProps) {
    return (
      <TouchableOpacity style={styles.chapterItemContainer} onPress={() => {}}>
        <View style={styles.chapterTextContainer}>
          {props.read && <View style={styles.readBadge} />}
          <Text style={[styles.chapterTitle]} numberOfLines={1}>
            Capítulo 1 - {manga.title}
          </Text>
        </View>
        <Text style={[styles.chapterDate]}>{props.date}</Text>
      </TouchableOpacity>
    );
  }

  function ChapterList() {
    return [...Array(20).keys()].map((item) => (
      <View style={styles.chapterContainer} key={item.toString()}>
        <ChapterItem
          key={item.toString()}
          name="Capítulo 1"
          date="2023-10-01"
          read={true}
        />
      </View>
    ));
  }

  return (
    <ScrollView style={styles.container}>
      {/* Manga details */}
      <View style={{ height: 100, width: "100%" }}></View>
      <View style={styles.mangaHeader}>
        <View style={styles.manga}>
          <MangaCard url={manga.imageUrl} width={110} />

          <View style={styles.mangaState}>
            <Text style={styles.mangaTitle}>{manga.title}</Text>
            <Text style={styles.mangaAuthor}>
              {" "}
              <FontAwesome6
                name="user"
                size={theme.typography.fontSize.sm}
                color={theme.colors.textSecondary}
              />
              {"  "}
              Yukimura Makoto
            </Text>
            <Text style={styles.mangaAuthor}>
              {" "}
              <FontAwesome6
                name="clock"
                size={theme.typography.fontSize.sm}
                color={theme.colors.textSecondary}
              />
              {"  "}
              Em Andamento
            </Text>
          </View>
        </View>
      </View>

      {/* Manga actions */}
      <View style={styles.actions}>
        <IconButton icon="heart" text="Na biblioteca" onPress={() => {}} />
        <IconButton icon="hourglass" text="Em breve" onPress={() => {}} />
        <IconButton icon="binoculars" text="Monitoramento" onPress={() => {}} />
        <IconButton icon="earth-americas" text="WebView" onPress={() => {}} />
      </View>

      {/* Manga sinopsis */}
      <View>
        <ExpandableText text={manga.sinopsis} />
      </View>
      {/* Manga chapters */}
      <Text
        style={{
          fontSize: theme.typography.fontSize.lg,
          fontWeight: "bold",
          color: theme.colors.textPrimary,
          marginBottom: theme.spacing.sm,
        }}
      >
        237 Capítulos
      </Text>
      <ChapterList />
    </ScrollView>
  );
}
