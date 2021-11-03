import React, {useEffect, useState} from 'react'
import {View} from 'react-native';
import {Button} from "react-native-web";





const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="go to Profile"
                onPress={() =>
                    navigation.navigate('Profile', { userId: 'TEST' })
                }>
                Go To Profile
            </Button>

        </View>
);

};

export default Home;
