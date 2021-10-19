import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';
import { Telas } from "../../utils/enums/telas";


export default function Playlists() {
    const [musics, setMusics] = useState([]);
    const token = "Bearer BQBcc7xK-RhqzEnriy4RslTd66D8dtU_thh8ya5nZAW5G4p5zIi_N1IU-C-DVk1bW_PHKwe4EvPPn8P9kB-rVhUF6XdRnF-2j9v-knODHpUBkhFYdRZzTRAdI1k_ZO0agTyHDWdFcDb0aVoR0KqADwJBN2RIHjwVwbk";
    const navigation = useNavigation();

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const playlistApi = await api.get('me/playlists', { headers: { authorization: token } });
        setMusics(playlistApi.data.items);
    }

    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>Minhas Playlists</Text>
            <FlatList
                data={musics}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.containerPedidos} onPress={() => navigation.navigate(Telas.playlistsTracks, { idPlaylist: item.id, playlistName: item.name})} >
                        <View>
                            <Text style={styles.txtOs}>Playlist: {String(item.name).length > 22 ? String(item.name).substr(0, 22) + '...' : item.name}</Text>
                            <Image source={{ uri: item.images[0].url }} style={styles.imageStyle} />
                        </View>
                        <Text style={styles.txtOs}>Autor: {item.owner.display_name}</Text>
                        <Text style={styles.txtOs}>Musicas: {item.tracks.total}</Text>
                    </TouchableOpacity>
                )} />
        </View>

    )
}