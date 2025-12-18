import { productsData } from '@/app/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'

const products = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList 
        keyExtractor={item => item.id}
        data ={productsData}
        renderItem={({item})=>(
            <View className='mt-10'>
              <Text className='text-2xl font-work-black'>{item.title}</Text>
               <Text className=''>{item.description}</Text>

               <View className='flex flex-row justify-between mt-2'>
                   <Text className='font-work-black'>{item.price}</Text>
                   <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
               </View>


            </View>
        )}
      
      />
    </View>
  )
}

export default products

