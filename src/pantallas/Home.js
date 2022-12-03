import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
    const {userInfo, isLoading, logout} = useContext(null);

    return (
        <View style={styles.container}>
        <Text style={styles.Bienvenido}> Bienvenido {userInfo.user.name}</Text>
        <Button title="Cerrar Sesion" color="red" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Bienvenido: {
      fontSize: 18,
      marginBottom: 8,
    },
});
  


export default HomeScreen;
