import React from "react";
import {
    Button,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
  } from 'react-native';

const Login = ({navegacion}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput 
                styles={styles.input}
                value={email}
                placeholder="Ingrese su correo" 
                onChangeText={text => setEmail(text)}
                />

                <TextInput 
                styles={styles.input}
                value={password}
                placeholder="Ingrese su contraseña" 
                onChangeText={text => setPassword(text)}
                secureTextEntry 
                />

                <Button title="INICIAR SESION" />

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>No tiene cuenta?</Text>
                    <TouchableOpacity onPress={() => navegacion.Navegador('Registrese')}>
                        <Text style={styles.link}>Registrese</Text>
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

export default Login;
