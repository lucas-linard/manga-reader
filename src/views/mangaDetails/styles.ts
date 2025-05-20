import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme/dark";

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      // justifyContent: 'center',
      backgroundColor: theme.colors.background,
      gap: theme.spacing.md,
    },
    manga: {
      flexDirection: "row",
      width: "100%",
    },
    mangaState: {
      marginLeft: theme.spacing.md,
      justifyContent: "center",
      gap: theme.spacing.sm,
    },
    mangaHeader: {
      width: "100%",
    },
    mangaTitle: {
      fontSize: theme.typography.fontSize.xl,
      fontWeight: "bold",
      color: theme.colors.textPrimary,
    },
    mangaAuthor: {
      fontSize: theme.typography.fontSize.md,
      fontWeight: "500",
      color: theme.colors.textSecondary,
    },
    actions: {
      marginVertical: theme.spacing.md,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    actionItemContainer: {
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
    },
    actionItemText: {
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.textSecondary,
      textAlign: "center",
    },

    chapterTitle: {
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.textPrimary,
    },
    chapterDate: {
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.textSecondary,
    },
    chapterItemContainer: {
      width: "100%",
      gap: theme.spacing.sm,
      borderBottomWidth: 1,
      borderColor: theme.colors.border,
      paddingBottom: theme.spacing.sm,
    },
    chapterTextContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    chapterContainer: {
      marginBottom: theme.spacing.sm,
    },
    readBadge: {
      height: 10,
      width: 10,
      borderRadius: 99,
      backgroundColor: theme.colors.primary,
    },
    sinopsisText: {
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.textPrimary,
        textAlign: "justify",
    }
  });
