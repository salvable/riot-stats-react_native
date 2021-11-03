import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@material-ui/core";
import {View} from "react-native";
import {Text} from "react-native-web";



const Profile = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is {route.params.userId}'s profile</Text>
        </View>
    );

};

export default Profile;
