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
      <SafeAreaView className='py-12 md:py-24 lg:py-32 xl:py-48'>
        <SafeAreaView className='px-4 md:px-6'>
          <SafeAreaView className='flex flex-col items-center gap-4 text-center'>
            <Text
              role='heading'
              className='text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
            >
              User Profile
            </Text>
            <Text className='mx-auto max-w-[700px] text-lg text-center text-green-700 md:text-xl dark:text-green-800'>
              This is the profile function of the application where the user
              dashboard will be.
            </Text>

            <SafeAreaView className='gap-4'>
              <Link
                suppressHighlighting
                className='flex h-9 items-center justify-center overflow-hidden rounded-md bg-red-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-red-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='/'
              >
                Click here to view your profile
              </Link>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}
