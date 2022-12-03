import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

const Registro = ({navegacion}) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, registrar} = useContext(null);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Ingrese su nombre"
                    onChangeText={text => setName(text)}
                />

                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Ingrese su correo"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Ingrese contraseña"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

        <Button
          title="Registrar"
          onPress={() => {
            registrar(name, email, password);
          }}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Ya tiene una cuenta? </Text>
          <TouchableOpacity onPress={() => navegacion.Navegador('INICIAR SESION')}>
            <Text style={styles.link}>Iniciar Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      width: '80%',
    },
    input: {
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingHorizontal: 14,
    },
    link: {
      color: 'blue',
    },
  });

export default Registro;
