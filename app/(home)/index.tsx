import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={'/index'}>inicial</Link>
    </View>
  )
}

export default HomeScreen