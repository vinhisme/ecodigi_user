import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Search = () => {
    return (
        <View>
            <Text>A Search Box</Text>
            <View style={styles.input}>
                <Text>
                    Đi đến đâu ?
                </Text>
                <View style={styles.input}>
                    <Image></Image>
                    <Text>Tại vị trí</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16,
    },
})
export default Search