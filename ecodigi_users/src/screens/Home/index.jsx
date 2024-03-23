import React from 'react'
import { View, Text } from 'react-native'

import Maps from '../../components/Map/Maps'
import Search from '../../components/Search/Search'

const HomeScreen = () => {
    return (
        <View>
            <Text>This is Home</Text>
            <Search />
            <Maps />
        </View>
    )
}

export default HomeScreen