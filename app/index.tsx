//https://docs.expo.dev/versions/latest/sdk/safe-area-context/

import { Link } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const App  = () => {

  //return <Redirect href={'/products'}/>
  //return <Redirect href={'/(home)'}/>
  //return <Redirect href={'/settings'}/>



  return (
      <SafeAreaView>

            <View className='mt-5 mx-2.5 bg-primary '>
              <Text 
              style={{fontFamily: 'WorkSans-Black'}}
              className='text-5xl '>Hola Mundo</Text>


              <Text className='text-4xl font-work-medium'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light'>Hola Mundo</Text>
            <Text className='text-4xl font-work-medium text-primary'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-secondary'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-secondary-100'>Hola Mundo</Text>
            <Text className='text-3xl font-work-light text-tertiary'>Hola Mundo</Text>

            <Link className='mb-5' href={'/products'}>Productos</Link>
            <Link  className='mb-5'  href={'/profile'}>Profile</Link>
            <Link  className='mb-5'  href={'/settings'}>Ajustes</Link>
           



             </View>


      </SafeAreaView>    
      
   
  )
}

export default App 