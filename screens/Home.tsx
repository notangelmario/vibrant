import React from 'react'
import { Headline, useTheme } from 'react-native-paper'
import { StyleSheet, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { List } from 'react-native-paper'
import firebase from 'firebase/app'
import { Audio } from 'expo-av';
import * as Notifications from 'expo-notifications'
import 'firebase/firestore'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
})

export default function HomeScreen(props) {
    const { navigation } = props
    const [songs, setSongs] = React.useState([])
    const theme = useTheme()



    React.useMemo(()=>{
        schedulePushNotification()
        const songsCollection = firebase.firestore().collection('songs')

        const songsFetched = []

        songsCollection.get().then((querySnapshot)=>{
            querySnapshot.forEach((song)=>{
                songsFetched.push({
                    title: song.data().title,
                    artist: song.data().artist,
                    cover: song.data().cover,
                })
            })
            setSongs(songsFetched)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Headline>Welcome home</Headline>
            <List.Section>
                <List.Subheader>Available on Vibrant</List.Subheader>
                {songs.map((song, idx)=>(
                    <List.Item
                        key={idx}
                        title={song.title}
                        onPress={async ()=>{
                            Audio.setAudioModeAsync({
                                staysActiveInBackground: true
                            })

                            const { sound: playbackObject } = await Audio.Sound.createAsync(
                                { uri: 'https://firebasestorage.googleapis.com/v0/b/vibrant-official.appspot.com/o/songs%2Fslchld%20-%20she%20likes%20spring%2C%20I%20prefer%20winter.-mgDsu7xAeWk.mp3?alt=media&token=c399e7dc-3e2a-40df-a4f2-c512367960b2' },
                                { shouldPlay: true }
                              );                              
                        }}
                        description={song.artist}
                        left={()=><Image source={{uri: song.cover}} style={styles.songCover}/>}
                    />
                ))}
            </List.Section>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    songCover: {
        width: 50,
        height: 50,
        borderRadius: 5
    }
})

async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}
  