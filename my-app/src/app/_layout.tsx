import '../global.css';
import { Slot, Stack, Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
AntDesign;

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='history'
        options={{
          title: 'History',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='clockcircle' size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='workouts'
        options={{
          title: 'Workouts',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='clockcircle' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
