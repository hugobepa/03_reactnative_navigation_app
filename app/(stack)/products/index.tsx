import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const products = () => {
  return (
    <View>
      <Text>products</Text>
      <Link href={'/'}>inicial</Link>
    </View>
  )
}

export default products