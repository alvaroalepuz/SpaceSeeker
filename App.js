import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Login from './screens/Login';
import Registrarse from './screens/Registrarse';
import 'react-native-gesture-handler';
import MarsRover from './screens/MarsRover';
import Satelite from './screens/Satelite';
import SpaceSeeker from './screens/SpaceSeeker';
import Asteroides from './screens/Asteroides';
import { DrawerContent } from './screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>

    <Drawer.Navigator drawerContent={props=> <DrawerContent{...props}/>} initialRouteName="Login" screenOptions={{
      headerStyle:{
      backgroundColor:'#38115C',},
      headerTintColor:'white',



    }}>
      <Drawer.Screen name="Login" component={Login} options={{ header:()=>null,
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null,
        //drawerItemStyle:{height:0}
         }} />
      <Drawer.Screen name="Registrarse" component={Registrarse} options={{ 
        header:()=>null,
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null,
        //drawerItemStyle:{height:0}
         }} />
      <Drawer.Screen name="SpaceSeeker" component={SpaceSeeker} />
      <Drawer.Screen name="MarsRover" component={MarsRover} />
      <Drawer.Screen name="Satelite" component={Satelite} />
      <Drawer.Screen name="Asteroides" component={Asteroides} />
      
    </Drawer.Navigator>
  </NavigationContainer >
);
const styles = StyleSheet.create({
  layout: { flex: 1, justifyContent: 'center', padding: 8, },
  title: { margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', },
});
export default App;