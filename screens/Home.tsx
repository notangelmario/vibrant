import React from 'react'
import { Headline, useTheme } from 'react-native-paper'
import { StyleSheet, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { List } from 'react-native-paper'
import firebase from 'firebase/app'
import TrackPlayer from 'react-native-track-player';
import 'firebase/firestore'

export default function HomeScreen(props) {
    const { navigation } = props
    const [songs, setSongs] = React.useState([])
    const theme = useTheme()



    React.useMemo(()=>{
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
                        onPress={()=>playSong(idx, "https://firebasestorage.googleapis.com/v0/b/vibrant-official.appspot.com/o/songs%2Fslchld%20-%20she%20likes%20spring%2C%20I%20prefer%20winter.-mgDsu7xAeWk.mp3?alt=media&token=c399e7dc-3e2a-40df-a4f2-c512367960b2", song.data().title, song.data().cover, song.data().artist)}
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

const playSong = async (id, url, title, cover, artist) => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: id,
        url: url,
        title: title,
        artist: artist,
        artwork: cover
    });

    // Start playing it
    await TrackPlayer.play();
};