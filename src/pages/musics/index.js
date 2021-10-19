import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./style";
import api from '../../service/api';

const travis = require('../../assets/images/travisScott.jpg')

export default function Musics() {

    const [musics, setMusics] = useState([]);
    //Change de Authorization Token for a valid token in Spotify's API
    const token = "Bearer BQCnh9Lu8e_5dh704oFgq9KN8YtR4LKHyvQKmw9EFL3V6OxjGkD6wGPBgK9Qc_h7xpsRPMpVPPzV3Ejod-zQ3ubVof7jBQDMuxsCpDJU7ao0AyV7JkfO5EkYu3lfABAljqN8G5yA9l-8E8qfzjjbzg";
    const [page, setPage] = useState(0)


    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const playlistApi = await api.get(`me/tracks`, { headers: { authorization: token } });
        setMusics(playlistApi.data.items);
    }

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }


    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>Minhas Musicas</Text>
            <FlatList
                data={musics}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.containerPedidos} >
                        <View>
                            <Text style={styles.txtOs}>Musica: {String(item.track.name.length > 27 ? String(item.track.name).substr(0, 27) + '...' : item.track.name)}</Text>
                            <Image source={{ uri: item.track?.album?.images[0]?.url }} style={styles.imageStyle} />
                        </View>
                        <Text style={styles.txtOs}>Artista: {item.track.artists[0].name}</Text>
                        <Text style={styles.txtOs}>Duração: {millisToMinutesAndSeconds(item.track.duration_ms)}</Text>
                    </TouchableOpacity>
                )} />
        </View>

    )
}