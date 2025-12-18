import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  
  return (
      <SafeAreaView>

            <View className='mt-5 mx-2.5 bg-tertiary '>
              <Text 
              style={{fontFamily: 'WorkSans-Black'}}
              className='text-5xl '>Hola Mundo</Text>


              <Text className='text-4xl font-work-medium'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light'>Hola Mundo</Text>
            <Text className='text-4xl font-work-medium text-primary'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-secondary'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-secondary-100'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-tertiary'>Hola Mundo</Text>

            {/* <Link className='mb-5' href={'/products'}>Productos</Link>
            <Link  className='mb-5'  href={'/profile'}>Profile</Link>
            <Link  className='mb-5'  href={'/settings'}>Ajustes</Link>
            */}
             

             <CustomButton className="mb-2" color='primary' onPress={()=>router.push('/drawer/tabs/(stack)/products')}>
              Productos</CustomButton>
            

             

              <CustomButton className="mb-2" color='secondary'  onPress={()=>router.push('/drawer/tabs/(stack)/profile')}>
              Profile</CustomButton>

              <CustomButton className="mb-2" color='primary'  onPress={()=>router.push('/drawer/tabs/(stack)/settings')}>
              Settings</CustomButton>

              <CustomButton className="mb-2" variant="text-only" onPress={()=>router.push('/drawer/tabs/(stack)/profile')}>
              ProfileTextOnly</CustomButton>

              <Link href='/drawer/tabs/products' asChild>
              <CustomButton  className='my-5' color='primary'>ProductosLink</CustomButton>
            </Link>
              

             </View>


      </SafeAreaView>    
      
   
  )

}

export default HomeScreen