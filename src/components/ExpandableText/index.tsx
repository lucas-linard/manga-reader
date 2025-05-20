import { Text, TouchableOpacity, View } from "react-native";
import { StyleProp, TextStyle } from "react-native";
import { useThemeStore } from "../../theme/useThemeStore";
import { createStyles } from "./styles";
import { useState } from "react";
import FontsAwesome6 from "@expo/vector-icons/FontAwesome6";
import { LinearGradient } from "expo-linear-gradient";

interface IExpandableTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export function ExpandableText(props: IExpandableTextProps) {
  const { text, style } = props;
  const { theme } = useThemeStore((state) => state);
  const styles = createStyles(theme);
  const [expanded, setExpanded] = useState(false);

  const textStyle = expanded ? styles.text : { ...styles.text, maxHeight: 50 };
  
  return (
    <LinearGradient
    colors={['transparent', '#000']}
    start={[0, 0]}
    end={[0, 1]}
    style={{
      flex: 1,
      justifyContent: 'flex-end',
      padding: 10,
    }}
    >
    <TouchableOpacity style={styles.containerExpanded}
    >
      <Text
        onPress={() => setExpanded(!expanded)}
        ellipsizeMode="tail"
        style={[textStyle, style]}
      >
        {text}
      </Text>
      <View style={{ alignItems: "center", width: "100%" }}>
        <FontsAwesome6
          name={expanded ? "chevron-up" : "chevron-down"}
          size={18}
          color={theme.colors.textSecondary}
        />
      </View>
    </TouchableOpacity>

    </LinearGradient>
  );
}
