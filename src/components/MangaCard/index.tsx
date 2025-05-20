import { View, Image, Text } from "react-native";
import MangaCardProps from "./types";
import { createStyles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeStore } from "../../theme/useThemeStore";

export function MangaCard({
  url,
  title,
  width,
  newPages,
  ...rest
}: MangaCardProps) {
  const { theme } = useThemeStore();
  const styles = createStyles(theme);

  return (
    <View style={[styles.container, { width }]} {...rest}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
        {newPages && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}> {newPages} </Text>
          </View>
        )}
        <LinearGradient
          colors={["transparent", theme.colors.fade]}
          start={{ x: 0, y: 0.6 }}
          end={{ x: 0, y: 1 }}
          style={styles.overlay}
        />
        {title && (
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
}
