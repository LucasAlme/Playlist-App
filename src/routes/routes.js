import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Musics from '../pages/musics';
import Playlists from '../pages/playlists';
import PlaylistsTracks from '../pages/playlists/playlists-tracks';
import { cores } from '../utils/Constants';
import { Telas } from '../utils/enums/telas';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function App() {

    const tabStyle = {
        labelStyle: { fontSize: 16 }, indicatorStyle: { width: '3%', marginLeft: '17%', backgroundColor: cores.roxo },
        tabBarStyle: { backgroundColor: cores.preto },
        activeTintColor: cores.roxo, inactiveTintColor: cores.roxo,

    };

    const defaultStyle = {
        headerStyle: { backgroundColor: cores.preto },
        headerTintColor: cores.branco
    };

    function MyTabs() {
        return (
            <Tab.Navigator tabBarOptions={tabStyle} screenOptions={{ tabBarStyle: { backgroundColor: cores.preto } }}>
                <Tab.Screen name={Telas.playlists} component={Playlists} />
                <Tab.Screen name={Telas.musics} component={Musics} />
            </Tab.Navigator>
        )
    };



    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={Telas.main} component={MyTabs} />
                <Stack.Screen options={defaultStyle} name={Telas.playlistsTracks} component={PlaylistsTracks} />
            </Stack.Navigator>
        )
    };

    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
};

export default App;