import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, TextInput } from 'react-native-paper';
import axios from 'axios';

const MarsRover = () => {

    const [isImageActive, setIsImageActive] = useState(false);
    function clickEventHandler() {
        setIsImageActive(true);
    }
    const [fecha, setText] = React.useState("");
    const [imagen, setImagen] = useState([]);

    const getDatos = async () => {
        const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${fecha}&api_key=oYrV0aqldH2hCi9ge7H5kSsXW0paPq8z6aW7wmJK`);
        setImagen(res.data.photos[0].img_src);

    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Imagen hecha de la superficie de Marte por el Mars Rover a partir de el 2014-02-01</Text>
            </View>
            <View style={styles.contImagen}>
                <View style={styles.input}>

                    <TextInput
                        label="Fecha 0000-00-00"
                        value={fecha}
                        onChangeText={fecha => setText(fecha)}
                    />
                </View>
                {isImageActive && (
                    <img
                        style={{ height: 400, width: 350, paddingBottom: 12 }}
                        src={
                            imagen
                        }
                    />
                )}

                <Button color='' mode="contained" onPress={() => getDatos() + clickEventHandler()}>
                    Buscar
                </Button>


            </View>


        </View >

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2B32'

    },
    title: {
        marginLeft: 30,
        color: "white",
        fontSize: 25,
        paddingTop: 5,
        fontFamily: 'roboto'

    },
    input: {
        margin: 20,
    },
    header: {
        backgroundColor: "#110F12",

    },
    contImagen: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 25,
        paddingBottom: 70,

    },
    contTexto: {
        flex: 1,
        backgroundColor: "#110F12",


    },
    descripcion: {
        flex: 2,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 18,
        color: "white",
        fontFamily: 'roboto',
    },
});
export default MarsRover;