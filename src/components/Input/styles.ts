import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme/dark";

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    searchInputContainer: {
      width: "100%",
      flexDirection: "row",
      borderRadius: 10,
      backgroundColor: theme.colors.content,
      paddingHorizontal: 20,
      marginVertical: 10,
      color: theme.colors.textPrimary,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: "center",
    },
    searchInput: {
      marginVertical: 10,
      flex: 1,
      color: theme.colors.textPrimary,
    },
  });
