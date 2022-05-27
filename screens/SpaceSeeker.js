import React, { Component, useState, useEffect } from 'react';
import { Alert, View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';

const SpaceSeeker = () => {
    const [titulo, setTitulo] = useState([]);
    const [imagen, setImagen] = useState([]);
    const [descripcion, setDescripcion] = useState([]);

    const getDatos = async () => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=oYrV0aqldH2hCi9ge7H5kSsXW0paPq8z6aW7wmJK`);
        setTitulo(res.data.title);
        setImagen(res.data.url);
        setDescripcion(res.data.explanation);
    }
    useEffect(() => {
        getDatos();
    }, [])
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Imagen del dia</Text>
                    <Divider />
                    <Text style={styles.title}>{titulo}</Text>
                </View>
                <View style={styles.contImagen}>

                    <Image style={styles.imagen} source={{ uri: imagen }}></Image>
                </View>
                <View style={styles.contTexto}>

                    <Text style={styles.descripcion}>{descripcion}</Text>
                </View>

            </ScrollView>
        </SafeAreaView >
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
    header: {
        backgroundColor: "#110F12",

    },
    imagen: {

        borderWidth: 1,
        height: 400,
        width: 350
    },
    contImagen: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 25,
        paddingBottom: 100,

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
export default SpaceSeeker;