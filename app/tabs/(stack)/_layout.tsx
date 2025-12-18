//https://docs.expo.dev/router/advanced/stack/
import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
  return (
     <Stack
        screenOptions={{
            //headerShown:false,
            headerShadowVisible: false,
            animation: 'ios_from_left',
            contentStyle:{
                backgroundColor: 'white',
            }


        }}
     
     >
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
            animation: 'fade_from_bottom',

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

            <Stack.Screen 
         name="products/[id]"
         options={{
            title:'Producto',

         }}
         />
     </Stack>
  )
}

export default StackLayout

