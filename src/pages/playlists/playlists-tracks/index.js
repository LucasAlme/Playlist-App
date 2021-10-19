import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import api from '../../../service/api';



export default function PlaylistsTracks() {
    const [musics, setMusics] = useState([]);
    const route = useRoute();
    const idPlaylist = route.params.idPlaylist;
    const playlistName = route.params.playlistName;
    const token = "Bearer BQAJOvYauFVj4k0JwvSbgVdqc-vVTrTXiRdCGnPRqbYhFeleQGVZnC7on0l-wpDJfFsYuB73ysg9rWC5HF0ibjIMiIoiB6Kb4EQPasuPXu3qVcDXisQHNygSL_JLZ2-MnobND4TueK2XiXMzvnbmbeZ5quKyLlOByI0"

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const playlistApi = await api.get(`playlists/${idPlaylist}/tracks`, { headers: { authorization: token } });
        setMusics(playlistApi.data.items);
    }

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>{playlistName}</Text>
            <FlatList
                data={musics}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerPedidos} >
                        <View>
                            <Text style={styles.txtOs}>Musica: {String(item.track.name.length > 27 ? String(item.track.name).substr(0, 27) + '...' : item.track.name)}</Text>
                            <Image source={{ uri: item.track?.album?.images[0]?.url }} style={styles.imageStyle} />
                        </View>
                        <Text style={styles.txtOs}>Artista: {String(item.track.artists[0].name) > 20 ? String(item.track.artists[0].name).substr(0, 20) + '...' : item.track.artists[0].name}</Text>
                        <Text style={styles.txtOs}>Duração: {millisToMinutesAndSeconds(item.track.duration_ms)}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    )
}