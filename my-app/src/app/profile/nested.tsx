import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function Page() {
  return (
    <SafeAreaView className='flex flex-1'>
      <Content />
    </SafeAreaView>
  );
}

function Content() {
  return (
    <SafeAreaView className='flex-1'>
      <Text>Second Screen</Text>
      <Link href='/second/nested' push asChild>
        Push to /second/nested
      </Link>
    </SafeAreaView>
  );
}
