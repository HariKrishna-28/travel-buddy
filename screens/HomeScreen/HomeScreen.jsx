import { View, Text, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../../assets'
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="relative flex-1 mt-3">
            {/* Header */}
            <View className="flex flex-row items-center justify-start px-6 space-x-2 mt-14">
                <View className="items-center justify-center w-16 h-16 bg-black rounded-full">
                    <Text className="text-3xl font-bold text-gray-400">
                        Go
                    </Text>
                </View>
                <Text className="font-bold text-xl">Travel</Text>
            </View>
            {/* Second section */}
            <View className="mt-8 px-8 space-y-3">
                <Text className="text-[35px] font-semibold">Enjoy the trip with</Text>
                <Text className="text-[30px] font-bold text-blue-600">Good moments</Text>
                <Text className="text-justify text-gray-600">
                    Welcome to your ultimate travel companion app! With this app, you can plan and organize every aspect of your trip,
                    from booking flights and hotels to creating custom itineraries and packing lists.
                    Explore recommendations for must-see destinations and find top-rated restaurants,
                    All your travel information is stored in one convenient place, making it easy to access everything you need on the go. Let's start your adventure!
                </Text>
            </View>
            {/* <View className='w-[300px] h-[300px] bg-blue-500 rounded-full absolute bottom-24 -right-36'></View>
            <View className='w-[300px] h-[300px] bg-purple-500 rounded-full absolute -bottom-16 -left-20'></View> */}

            {/* image container */}
            {/* <View className="flex-1 relative items-center justify-center">
                <Image
                    source={HeroImage}
                    className="w-full h-full object-cover"
                >
                </Image>
            </View> */}

            <View className="flex-1 justify-center items-center">
                {/* <Button 
                onPress={}
                /> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")}
                >
                    <Animatable.View
                        animation={"pulse"}
                        easing="ease-in-out"
                        iterationCount={"infinite"}
                    >
                        <Text className="bg-blue-500 font-2xl text-white font-bold py-2 px-4 rounded">
                            Go
                        </Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen