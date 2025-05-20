import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="library" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}