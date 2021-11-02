import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/component/home";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Stats.GG' }}
                />
                {/*<Stack.Screen name="Profile" component={Profile} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}