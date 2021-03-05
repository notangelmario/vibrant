import React from 'react'
import { useTheme } from '@react-navigation/native'
import { Headline } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingsScreen() {
    const theme = useTheme()

    return (
        <SafeAreaView style={styles.container}>
            <Headline>Settings</Headline>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    }
})