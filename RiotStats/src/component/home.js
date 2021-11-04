import React, {useEffect, useState} from "react"
import {View} from "react-native";
import {Button} from "react-native-web";
import {
    Box,
    Grid,
    InputAdornment,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";



const Home = ({navigation}) => {
    const [search, setSearch] = useState("");
    const [rotations,setRotations] = useState([])

    useEffect(() => {
        async function getRotations(){
            const rotations = await axios.get(`http://localhost:3000/rotations`)
            setRotations(rotations.data.rotations)
        }
        getRotations()
    }, []);

    return (
        <Grid container spacing={6} style={{height: "100%", marginTop: 5, backgroundColor: "#222222"}}>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={8}>
                <Box align="center">
                    <h1 style={{ color: "white" }}>STATS.GG</h1>
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
                                width: "100%",
                                margin: "20px"
                            }
                        }}
                        onChange={async (e)=>{
                            setSearch(e.target.value)
                            console.log(rotations)
                        }}
                    />
                </Box>
                <Box
                    style={{align: "center"}}
                    sx={{
                        width: "100%",
                        height: 300,
                    }}
                >
                    <div style={{paddingTop: "10%",  color: "white" }}><h3>주간 로테이션</h3></div>
                    <div>
                        {
                            rotations.map(rotation => (
                                <img src={`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${rotation.En_name}.png`} title={rotation.Kr_name}/>
                            ))
                        }
                    </div>
                </Box>

                </Grid>
            <Grid item xs={2}>
            </Grid>
        </Grid>
    );
};

export default Home;
