import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBascketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

export default function BasketIcon() {
    const items = useSelector(selectBascketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if (!items.length) 
        return null

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Basket')}
      className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>${(basketTotal).toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  )
}