import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const App  = () => {
  return (

    <SafeAreaView>
             <View className='mt-5 mx-2.5'>
              <Text 
              style={{fontFamily: 'WorkSans-Black'}}
              className='text-5xl '>Hola Mundo</Text>


              <Text className='text-4xl font-work-medium'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light'>Hola Mundo</Text>
             </View>
    </SafeAreaView>

  
  )
}

export default App 