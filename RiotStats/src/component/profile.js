import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@material-ui/core";
import {View} from "react-native";
import {Text} from "react-native-web";
import axios from "axios";



const Profile = ({ navigation, route }) => {
    // summoner는 accountId, id, name, profileIconId, puuid,summonerLevel을 가짐
    const [summoner,setSummoner] = useState("")

    useEffect(() => {
        async function getSummoner(){
            const summonerInfo = await axios.get(`http://localhost:3000/summoner/${route.params.userId}`)
            setSummoner(summonerInfo.data.summoner)
        }
        getSummoner()
    }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is {route.params.userId}'s profile</Text>

        </View>
    )
}

export default Profile;
