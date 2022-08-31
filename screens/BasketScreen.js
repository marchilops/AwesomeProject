import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { selectBascketItems } from '../features/basketSlice'
import { useMemo } from 'react'
import { useState } from 'react'

export default function BasketScreen() {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBascketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || [].push(item))
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}