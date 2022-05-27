import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';


export default class Registrarse extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            email: '',
            contraseña: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirmSecureTextEntry: true
        }
    };
    InsertRecord = () => {
        var Email = this.state.email;
        var Contraseña = this.state.contraseña;
        var Nombre = this.state.nombre;
        var Apellido = this.state.apellido;
        var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);

        if ((Email.length == 0) || (Contraseña.length == 0) || (Nombre.length == 0) || (Apellido.length == 0)) {
            alert("Debe rellenar todos los campos");
        } else if (!(checkEmail).test(Email)) {
            alert("Correo no valido");
        }

        else {
            var InsertAPIURL = "http://127.0.0.1/SignUp.php";   //API to render signup

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var Data = {
                Nombre: Nombre,
                Apellido: Apellido,
                Email: Email,
                Contraseña: Contraseña

            };





            fetch(InsertAPIURL, {
                mode: 'no-cors',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data) //convert data to JSON
            })
                .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
                .then((response) => {
                    alert(response[0].Message);       // If data is in JSON => Display alert msg
                    this.props.navigation.navigate("Login"); //Navigate to next screen if authentications are valid
                })
                .catch((error) => {
                    alert("Error Occured" + error);
                })
        }
    }

    updateSecureTextEntry() {
        this.setState({
            ...this.state,
            secureTextEntry: !this.state.secureTextEntry
        });
    }

    updateConfirmSecureTextEntry() {
        this.setState({
            ...this.state,
            confirmSecureTextEntry: !this.state.confirmSecureTextEntry
        });
    }

    render() {
        return (

            <View style={styles.container} >
                <ImageBackground source={{ uri: 'https://mymodernmet.com/wp/wp-content/uploads/2019/06/nasa-free-photos-online-thumbnail.jpg' }} resizeMode="cover" style={styles.image}>

                    <Text style={styles.texto}>Space Seeker</Text>
                    <View style={styles.input}>
                        <TextInput
                            label="Nombre"
                            onChangeText={nombre => this.setState({ nombre })}
                        />
                    </View>

                    <View style={styles.input}>

                        <TextInput
                            label="Apellido"
                            onChangeText={apellido => this.setState({ apellido })}
                        />
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            label="Email"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            label="Contraseña"
                            secureTextEntry={this.state.secureTextEntry ? true : false}
                            onChangeText={contraseña => this.setState({ contraseña })}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this.updateSecureTextEntry.bind(this)}>
                        {this.state.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="black"
                                size={20}
                            />
                        }
                    </TouchableOpacity>

                    <View style={styles.input}>

                        <Button color='' mode="contained" onPress={() => this.props.navigation.navigate('Login') /*{ this.InsertRecord() }*/}>
                            Guardar
                        </Button>
                    </View>
                    <View style={styles.input}>

                        <Button color='' mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
                            Cancelar
                        </Button>


                    </View>
                </ImageBackground >
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    input: {
        margin: 20,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        height: '100%',
        width: '100%',
    },
    texto: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        paddingBottom: 70
    },
});