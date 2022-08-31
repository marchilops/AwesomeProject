import { React, useEffect, useLayoutEffect } from 'react';
import { View,Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, SearchIcon, CogIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import SanityClient from '../sanity'

export default function HomeScreen() {

    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    useEffect(()=>){
        SanityClient.fetch(`*[_type == 'featured'] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }`).then((data) => {
              setFeaturedCategories(data);
          })
    }

    return (
        <SafeAreaView className="bg-white">
            {/* Header */}
            <View className="flex-row items-center mx-4 space-x-4 mb-4">
                <Image 
                    source={{uri: 'http://links.papareact.com/wru'}} 
                    className="h-20 w-20 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xl">Deliver now</Text>
                    <View className="flex-row items-center justify-between">
                        <Text className="text-gray-400">Current location</Text>
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </View>
                </View>
                <UserIcon size={35} color='#00CCBB' />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 mx-4 mb-4 ">
                <View className="flex-row flex-1 space-x-2 p-2 bg-gray-100" style={{borderRadius: 20}}>
                    <SearchIcon size={25} color='#C3C3C3' />
                    <TextInput 
                        className="ml-4 mr-4 flex-1" 
                        placeholder='Restaurant & Cuisines' 
                        keyboardType='default' 
                    />
                </View>
                <CogIcon size={25} color='#00CCBB'/>
            </View>

            {/* Body */}
            <ScrollView className="flex-1 " contentContainerStyle={{paddingBottom: 100}}>
                {/* Categories */}
                <Categories />
                
                {/* Featured Row */}
                <FeaturedRow
                    id="123"
                    title="Featured" 
                    description="FeaturedRow" />
                {/* Discounts */}
                <FeaturedRow 
                    id="1234"
                    title="Featured" 
                    description="FeaturedRow" />
                {/* Offers near you */}
                <FeaturedRow 
                    id="1235"
                    title="Featured" 
                    description="FeaturedRow" />
            </ScrollView>
        </SafeAreaView>
    )
}
