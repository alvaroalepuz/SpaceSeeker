import React, { Component, useState, useEffect } from 'react';

import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';



const Asteroides = () => {

    const [inicio, setText1] = React.useState("");
    const [final, setText2] = React.useState("");

    const [Nombre, setTexto1] = useState([]);
    const [Magnitud, setTexto2] = useState([]);
    const [Peligroso, setTexto3] = useState([]);
    const [Orbitando, setTexto4] = useState([]);
    const getDatos = async () => {
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${inicio}&end_date=${final}&api_key=oYrV0aqldH2hCi9ge7H5kSsXW0paPq8z6aW7wmJK`);

        setTexto1(res.data.near_earth_objects[inicio][0].name);
        setTexto2(res.data.near_earth_objects[inicio][0].absolute_magnitude_h);
        if (setTexto3(res.data.near_earth_objects[inicio][0].is_potentially_hazardous_asteroid)) {
            setTexto3("No");

        } else {
            setTexto3("Si");

        }

        setTexto4(res.data.near_earth_objects[inicio][0].close_approach_data[0].orbiting_body);



    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.title}>Encuentra Asteroides Maximo 7 dias</Text>
                </View>
                <View style={styles.contImagen}>
                    <View style={styles.input}>

                        <TextInput
                            label="Fecha de inicio 0000-00-00"
                            value={inicio}
                            onChangeText={inicio => setText1(inicio)}
                        />
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            label="Fecha final 0000-00-00"
                            value={final}
                            onChangeText={final => setText2(final)}
                        />
                    </View>
                    <Button color='' mode="contained" onPress={() => getDatos()}>
                        Buscar
                    </Button>

                </View>
                <View style={styles.contTexto}>

                    <Text style={styles.descripcion}>Nombre del Asteroide: {Nombre} </Text>
                    <Text style={styles.descripcion}>Magnitud: {Magnitud} </Text>
                    <Text style={styles.descripcion}>Asteroide Peligroso: {Peligroso} </Text>
                    <Text style={styles.descripcion}>Cuerpo que Orbita: {Orbitando} </Text>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2B32'

    },
    title: {
        flex: 3,
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
export default Asteroides;