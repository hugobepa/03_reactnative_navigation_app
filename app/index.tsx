//https://docs.expo.dev/versions/latest/sdk/safe-area-context/
//https://docs.expo.dev/router/advanced/stack/

import { Redirect } from "expo-router"




const App  = () => {

  //return <Redirect href={'/products'}/>
  //return <Redirect href={'/(home)'}/>
  //return <Redirect href={'/settings'}/>
  //return <Redirect href={'/(stack)/home'}/>
  return <Redirect href={'/tabs'}/>

     

  // return (
  //     <SafeAreaView>

  //           <View className='mt-5 mx-2.5 bg-tertiary '>
  //             <Text 
  //             style={{fontFamily: 'WorkSans-Black'}}
  //             className='text-5xl '>Hola Mundo</Text>


  //             <Text className='text-4xl font-work-medium'>Hola Mundo</Text>
  //           <Text className='text-3xl font-work-light'>Hola Mundo</Text>
  //           <Text className='text-4xl font-work-medium text-primary'>Hola Mundo</Text>
  //           <Text className='text-3xl font-work-light text-secondary'>Hola Mundo</Text>
  //           <Text className='text-3xl font-work-light text-secondary-100'>Hola Mundo</Text>
  //           <Text className='text-3xl font-work-light text-tertiary'>Hola Mundo</Text>

  //           <Link className='mb-5' href={'/products'}>Productos</Link>
  //           <Link  className='mb-5'  href={'/profile'}>Profile</Link>
  //           <Link  className='mb-5'  href={'/settings'}>Ajustes</Link>
           
             

  //            <CustomButton className="mb-2" color='primary' onPress={()=>router.push('/products')}>
  //             Productos</CustomButton>
            

             

  //             <CustomButton className="mb-2" color='secondary'  onPress={()=>router.push('/profile')}>
  //             Profile</CustomButton>

  //             <CustomButton className="mb-2" color='primary'  onPress={()=>router.push('/settings')}>
  //             Settings</CustomButton>

  //             <CustomButton className="mb-2" variant="text-only" onPress={()=>router.push('/profile')}>
  //             ProfileTextOnly</CustomButton>

  //             <Link href='/products' asChild>
  //             <CustomButton  className='my-5' color='primary'>ProductosLink</CustomButton>
  //           </Link>
              

  //            </View>


  //     </SafeAreaView>    
      
   
  // )
}

export default App 