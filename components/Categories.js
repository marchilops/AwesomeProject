import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { urlFor } from '../sanity';
import CategoryCard from './CategoriesCard';
import SanityClient from '../sanity'

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        SanityClient.fetch(`
        *[_type == 'Categories']`).then((data) => {
            setCategories(data)
        })
    }, [])

    return (
        <ScrollView
            className="mb-4"
            contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {/*CategoryCard*/}
            {categories?.map((category) => (
                <CategoryCard 
                key={category._id}
                imgUrl={urlFor(category.image).width(200).url()}
                title={category.name} />
            ))}
        </ScrollView>
    )     
}