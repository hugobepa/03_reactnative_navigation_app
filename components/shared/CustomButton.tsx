import React from 'react'
import { Pressable, PressableProps, Text } from 'react-native'


interface Props extends PressableProps{
    children: string
    color?: 'primary' | 'secondary' | 'tertiary'
}


const CustomButton = ({children,color='primary',...res}:Props) => {
    
    const{onPress,onLongPress}=res

    const btnColor ={
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'br-tertiary',
    }[color];

  return (
    <Pressable
    className={`p-3 rounded-md ${btnColor} active:opacity-50`}
    onPress={onPress}
    onLongPress={onLongPress}
    >
        <Text className='text-white text-center'>{children}</Text>
    </Pressable>
  )
}

export default CustomButton