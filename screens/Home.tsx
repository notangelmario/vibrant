import React from 'react'
import { Headline, useTheme } from 'react-native-paper'
import { StyleSheet, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { List } from 'react-native-paper'

export default function HomeScreen(props) {
    const { navigation } = props
    const theme = useTheme()

    return (
        <SafeAreaView style={styles.container}>
            <Headline>Welcome home</Headline>
            <List.Section>
                <List.Subheader>Available on Vibrant</List.Subheader>
                <List.Item
                    title='she likes spring, i prefer winter'
                    onPress={()=>{}}
                    description='slchld'
                    left={()=><Image source={{uri: "https://m.media-amazon.com/images/I/81LgbvxiQGL._SS500_.jpg"}} style={{width: 50, height: 50}}/>}
                />
            </List.Section>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
})