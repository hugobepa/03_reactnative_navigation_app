//https://docs.expo.dev/router/advanced/stack/
import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
  return (
     <Stack>
         <Stack.Screen 
         name="home/index"
         options={{
            title:'Inicio',

         }}
         />

          <Stack.Screen 
         name="products/index"
         options={{
            title:'Productos screen',

         }}
         />

          <Stack.Screen 
         name="profile/index"
         options={{
            title:'Perfil screen',

         }}
         />

          <Stack.Screen 
         name="settings/index"
         options={{
            title:'Ajustes screen',

         }}
         />

     </Stack>
  )
}

export default StackLayout

