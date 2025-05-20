import { Dimensions, StyleSheet } from "react-native";
import { useThemeStore } from "../../theme/useThemeStore";
import { ThemeType } from "../../theme/dark";


export const createStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    },
  imageWrapper: {
    width: "100%",
    aspectRatio: 2 / 3, // proporção clássica de mangá (largura / altura)
    borderRadius: theme.radius.md,
    overflow: "hidden",
    position: "relative",
    justifyContent: "flex-end",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    fontSize: theme.typography.fontSize.sm,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
  },
  badge: {
    position: "absolute",
    top: 5,
    left: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xs,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
  }, 
  badgeText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.fontSize.xs,
    fontWeight: 'bold',
  }
});


