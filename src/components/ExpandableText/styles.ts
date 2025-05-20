import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme/dark";

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    text: {
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.textSecondary,
    },
    containerExpanded: {
      flex: 1,
      justifyContent: "center",
    },
    chevronContainer: { alignItems: "center", width: "100%" },
  });
