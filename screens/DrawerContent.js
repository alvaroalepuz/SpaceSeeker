import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



export function DrawerContent(props) {

    const paperTheme = useTheme();


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#38115C'
        }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <Drawer.Section >
                        <DrawerItem activeTintColor='white' inactiveTintColor='white'

                            label="Inicio"
                            onPress={() => { props.navigation.navigate('SpaceSeeker') }}
                        />
                        <DrawerItem activeTintColor='white' inactiveTintColor='white'

                            label="Asteroides"
                            onPress={() => { props.navigation.navigate('Asteroides') }}
                        />
                        <DrawerItem activeTintColor='white' inactiveTintColor='white'

                            label="Satelite"
                            onPress={() => { props.navigation.navigate('Satelite') }}
                        />
                        <DrawerItem activeTintColor='white' inactiveTintColor='white'

                            label="MarsRover"
                            onPress={() => { props.navigation.navigate('MarsRover') }}
                        />                        
                        <DrawerItem activeTintColor='white' inactiveTintColor='white'

                            label="Cerrar Sesion"
                            onPress={() => { props.navigation.navigate('Login') }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
});