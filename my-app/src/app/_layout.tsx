import '../global.css';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Slot, Stack, Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
AntDesign;

export default function Layout() {
  return (
    <React.Fragment>
      <StatusBar style='auto' />
      <Tabs screenOptions={{ tabBarActiveTintColor: 'orange' }}>
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
              <AntDesign name='user' size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='workouts'
          options={{
            title: 'Workouts',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='heart' size={24} color={color} />
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
      </Tabs>
    </React.Fragment>
  );
}
