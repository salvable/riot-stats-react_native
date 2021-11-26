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
    const [search,setSearch] = useState("")

    useEffect(() => {
        async function getSummoner(){
            const summonerInfo = await axios.get(`http://localhost:3000/summoner/${route.params.userId}`)
            setSummoner(summonerInfo.data.summoner)
            console.log(summonerInfo)
        }
        getSummoner(route.params.userId)
    }, [route.params.userId]);

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
                    <box style={{display: "flex",justifyContent: "space-between", marginTop: 20, backgroundColor: "#282828"}}>
                        <h1 style={{color: "white", marginLeft: "10px"}}>STATS.GG</h1>
                        <TextField
                            variant="outlined"
                            placeholder="KR Summoner Id"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon
                                            onClick={() =>
                                                navigation.navigate("Profile", { userId: search })
                                            }
                                        />
                                    </InputAdornment>
                                ),
                                style:{
                                    backgroundColor: "white",
                                    color: "black",
                                    width: "80%",
                                    margin: "20px",

                                }
                            }}
                            onChange={async (e)=>{
                                setSearch(e.target.value)
                            }}
                            onKeyPress={()=>{
                                if(event.keyCode==13){
                                    navigation.navigate("Profile", { userId: search })
                                }
                            }}
                        />
                    </box>
                    <box style={{display: "flex", marginTop: 20, backgroundColor: "#282828"}}>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${summoner.profileIconId}.png`} style={{width: "10%", margin:"5px"}} />
                        <box>
                            <h1 style={{color: "white", marginLeft: "10px"}}>{route.params.userId}</h1>
                            <Button
                                style={{margin: "10px"}}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                전적갱신
                            </Button>
                        </box>
                    </box>

                <Grid container spacing={6} style={{height: "100%", marginTop: 5, backgroundColor: "#323232"}}>
                    <Grid item xs={4}>
                        <box ></box>
                        <box></box>
                    </Grid>
                    <Grid item xs={8}>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}

export default Profile;
