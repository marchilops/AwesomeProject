import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native'

export default function CategoryCard({imgUrl, title}) {
    return (
        <TouchableOpacity className="relative mr-3">
            <Image 
                source={{uri: imgUrl}} 
                alt={title} 
                className="h-20 w-20 rounded"/>
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    ) 
}
Footer

