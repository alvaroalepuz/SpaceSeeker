import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      contraseña: '',
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Contraseña = this.state.contraseña;

    if ((Email.length == 0) || (Contraseña.length == 0)) {
      alert("Rellenar todos los campos");
    } else {
      var APIURL = "http://127.0.0.1/login.php";

      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      var Data = {
        Email: Email,
        Contraseña: Contraseña
      };

      fetch(APIURL, {
        mode: 'no-cors',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((Response) => Response.json())
        .then((Response) => {
          alert(Response[0].Message)
          if (Response[0].Message == "Success") {
            console.log("true")
            this.props.navigation.navigate("SpaceSeeker");
          }
          console.log(Data);
        })
        .catch((error) => {
          console.error("ERROR FOUND" + error);
        })
    }


  }

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {

    return (

      <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://mymodernmet.com/wp/wp-content/uploads/2019/06/nasa-free-photos-online-thumbnail.jpg' }} resizeMode="cover" style={styles.image}>

          <Text style={styles.texto}>Space Seeker</Text>
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
          </View>

          <View style={styles.input}>

            <Button color='' mode="contained" onPress={() => this.props.navigation.navigate('SpaceSeeker') /*{ this.InsertRecord() }*/}>
              Entrar
            </Button>
          </View>
          <View style={styles.input}>

            <Button color='' mode="contained" onPress={() => this.props.navigation.navigate('Registrarse')}>
              Registrarse
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