import { createStackNavigator } from "@react-navigation/stack";
import Welcome from'../screens/Welcome'
import SignIn from '../screens/SignIn'
import Senha from "../screens/SignIn/senha";
import Entrar from "../screens/Login/Entrar";
import Home from "../screens/Main/main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Configurações from "../screens/Tela-configurações/conf";
import Perfil from "../screens/Drawer-screens/Perfil";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="SignIN"
            component={SignIn}
            options={{title:'Criar conta',
                headerStyle:{
                    backgroundColor:'black'
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Senha"
            component={Senha}
            options={{title:'Criar conta',
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Entrar"
            component={Entrar}
            options={{title:'',
                headerStyle:{
                    backgroundColor:'black',
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold',
                    textAlign:'center',
                    justifyContent:'center',
                },
                headerTitleAlign:'center'
            }}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Configurações"
            component={Configurações}
            options={{title:'Configurações'}}
            />
        </Stack.Navigator>
    )
}
