import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ajuda from '../Drawer-screens/ajuda';
import Perfil from '../Drawer-screens/Perfil';
import Sobre from '../Drawer-screens/sobre';
import Suporte from '../Drawer-screens/suporte';
import Home from '../Drawer-screens/home-drawer';
import { DrawerNavigator } from '@react-navigation/drawer';
import SideBar from '../SideBar/sidebar'
import { Feather, Ionicons } from '@expo/vector-icons';
import HomeDrawer from '../Drawer-screens/home-drawer';


const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideBarContent {...props}/>}
    screenOptions={{
     drawerActiveBackgroundColor: '#15E409',
     drawerActiveTintColor:'#fff',
     drawerInactiveTintColor: "#fff",
     drawerLabelStyle: {marginLeft: -25,
     fontFamily:'roboto-Medium',
     fontSize:13,
    }
  }}
    >
      <Drawer.Screen 
      name="Perfil"
      component={Perfil} 
      options={{
        drawerIcon: ({color}) => {
          return <Ionicons name="person-outline" size={20} color={color} />
        },
        title:'Perfil'
      }}
       />
      <Drawer.Screen
      name="Home"
      component={HomeDrawer}
      options={{
        drawerIcon: ({color}) => {
          return <Ionicons name="home-outline" size={20} color={color} />
        },
        focused:true
      }}
      />
      <Drawer.Screen
      name='Sobre'
      component={Sobre}
      options={{
        drawerIcon: ({color}) => {
          return <Ionicons name="information-outline" size={20} color={color} />
        }
      }}
      />
      <Drawer.Screen
      name='Ajuda'
      component={Ajuda}
      options={{
        drawerIcon: ({color}) => {
          return <Ionicons name="help-buoy-outline" size={20} color={color} />
        }
      }}
      />

      <Drawer.Screen
      name='Suporte'
      component={Suporte}
      options={{
        drawerIcon: ({color}) => {
          return <Ionicons name="help-outline" size={20} color={color} />
        }
      }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;