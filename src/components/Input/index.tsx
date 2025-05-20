import {
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from "react-native";
import { createStyles } from "./styles";
import { useThemeStore } from "../../theme/useThemeStore";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IInputProps extends TextInputProps {
  onPress?: () => void;
  icon?: any;
}

export function Input({ onPress, icon, ...rest }: IInputProps) {
  const { theme } = useThemeStore();
  const styles = createStyles(theme);
  return (
    <View style={styles.searchInputContainer}>
      <TextInput style={styles.searchInput} {...rest} />
      {icon && <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>}
    </View>
  );
}
