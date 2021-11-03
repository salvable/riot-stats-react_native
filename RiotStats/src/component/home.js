import React, {useEffect, useState} from 'react'
import {View} from 'react-native';
import {Button} from "react-native-web";
import {Box, Grid, InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";



const Home = ({navigation}) => {
    const [search, setSearch] = useState("");

    return (
        <Grid container spacing={6} style={{height: "100%", marginTop: 5, backgroundColor: '#222222'}}>
            <Grid item xs={12}>
                <Box align="center">
                    <h1 style={{ color: 'white' }}>STATS.GG</h1>
                    <TextField
                        variant="outlined"
                        placeholder="KR Summoner Id"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon
                                        onClick={() =>
                                            navigation.navigate('Profile', { userId: search })
                                        }
                                    />
                                </InputAdornment>
                            ),
                            style:{
                                backgroundColor: "white",
                                color: "black",
                                width: "100%",
                                margin: '20px'
                            }
                        }}
                        onChange={async (e)=>{
                            setSearch(e.target.value)
                        }}
                    />
                    <Button
                        title="go to Profile"
                        onPress={() =>
                            navigation.navigate('Profile', { userId: 'TEST' })
                        }>
                        Go To Profile
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Home;
