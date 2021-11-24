import React, {useEffect, useState} from 'react'
import {Box, Button, Grid, InputAdornment, TextField} from "@material-ui/core";
import {View} from "react-native";
import {Text} from "react-native-web";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";



const Profile = ({ navigation, route }) => {
    // summoner는 accountId, id, name, profileIconId, puuid,summonerLevel을 가짐
    const [summoner,setSummoner] = useState("")
    const [rank,setRank] = useState("")

    useEffect(() => {
        async function getSummoner(){
            const summonerInfo = await axios.get(`http://localhost:3000/summoner/${route.params.userId}`)
            setSummoner(summonerInfo.data.summoner)
        }
        getSummoner()
    }, []);

    useEffect(() => {
        async function getRank(){
            const rank = await axios.get(`http://localhost:3000/rank/${summoner.id}`)
            console.log(rank.data)
            setRank(rank.data.summoner)
        }
        getRank()
    }, [summoner]);


    return (
        <Grid container spacing={6} style={{height: "100%", marginTop: 5, backgroundColor: "#222222"}}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Box align="center">
                   
                </Box>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}

export default Profile;
