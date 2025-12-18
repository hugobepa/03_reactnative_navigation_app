import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SettingsScreen = () => {

  return (
    <View>
      <Text>Settings</Text>
      <Link href={'/'}>home</Link>
    </View>
  )
}

export default SettingsScreen