import React, {useEffect, useState} from 'react'
import {Box, Button, Grid, InputAdornment, Paper, TextField} from "@material-ui/core";
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
            console.log(summonerInfo)
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
        <Grid container spacing={6} style={{height: "100%", marginTop: 5, backgroundColor: "#323232"}}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                    <box style={{display: "flex", marginTop: 20}}>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${summoner.profileIconId}.png`} style={{width: "10%"}} />
                        <box>
                            <h1 style={{color: "white", marginLeft: "10px"}}>{route.params.userId}</h1>
                            <Button
                                style={{marginLeft: "10px"}}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                전적갱신
                            </Button>
                        </box>
                    </box>

            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}

export default Profile;
