//https://docs.expo.dev/router/advanced/stack/
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';
import React from 'react';

const StackLayout = () => {


const navigation = useNavigation();
const router = useRouter()

const onHeaderLeftClick = (canGoBack: boolean | undefined)=>{

   if(canGoBack){
      //navigation.dispatch(StackActions.pop())
      //navigation.goBack()
      //navigation.dispatch(StackActions.pop())
      router.back()
      return
   }

   navigation.dispatch(DrawerActions.toggleDrawer)
}


  return (
     <Stack
        screenOptions={{
            //headerShown:false,
            headerShadowVisible: false,
            animation: 'ios_from_left',
            contentStyle:{
                backgroundColor: 'white',
            },
            headerLeft: ({tintColor,canGoBack})=><Ionicons
               name={canGoBack ? 'arrow-back-outline' :  "grid-outline" }
               size={20}
               className='mr-5'
               onPress ={()=>onHeaderLeftClick(canGoBack)}
               //onPressOut ={()=>onHeaderLeftClick(canGoBack)}
            />
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

