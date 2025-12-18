import productsData from '@/app/store/products.store'
import { Redirect, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ProductScreen = () => {

  const {id} =useLocalSearchParams()

  const product = productsData.find(p => p.id === id)

  if(!product){
    return <Redirect href={'/'} />
  }

  return (
    <View className='px-5 mt-10 gap-4'>
      <Text className='font-work-black text-2xl pb-4'>{product.title}</Text>
      <Text className=''>{product.description}</Text>
      <Text className='font-work-black'>{product.price}</Text>
    </View>
  )
}

export default ProductScreen