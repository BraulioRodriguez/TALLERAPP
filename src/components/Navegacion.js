import React from "react";
import { Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../pantallas/Home";
import Login from "../pantallas/Login";
import Registro from "../pantallas/Registro";

const Stack = createNativeStackNavigator();

const Navegacion = () => {

    return (
        <NavigationContainer>
            <Stack.Navegador>
                <Stack.Pantalla name="Login" 
                component={Login} 
                option={{headerShown: false}} />

                <Stack.Pantalla name="Registro" 
                component={Registro} 
                option={{headerShown: false}}/>

                <Stack.Pantalla name="Home" component={HomeScreen} />
            </Stack.Navegador>

        </NavigationContainer>
    );
};

export default Navegacion;
