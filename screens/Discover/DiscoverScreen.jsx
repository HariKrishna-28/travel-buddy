import { View, Text, } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const DiscoverScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View>
            <Text>DiscoverScreen</Text>
        </View>
    )
}

export default DiscoverScreen