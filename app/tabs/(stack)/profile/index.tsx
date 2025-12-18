import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Link href={'/'}>inicial</Link>
    </View>
  )
}

export default ProfileScreen