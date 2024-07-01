import React, {useState}from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput , TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Entrar(){

    const navigation = useNavigation();
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);



    return(
        <KeyboardAvoidingView style={styles.Container}>
            <Text style={styles.TxtEmail}>
                E-mail ou nome de {'\n'}usuário
            </Text>
            <TextInput style={styles.inputEmail}
            selectionColor="#fff"
            />
            <Text style={styles.TxtSenha}>Senha</Text>
         <View style={styles.InputArea}>
            <TextInput style={styles.InputSenha}
            placeholder=""
            selectionColor={"#fff"}
            value={input}
            onChange={(texto) => setInput(texto)}
            secureTextEntry={hidePass}
            />

            <TouchableOpacity onPress={() => setHidePass(!hidePass)} style={styles.eye}>
                {hidePass?
                <Ionicons name="eye" color="#fff" size={25}/>
                :
                <Ionicons name="eye-off" color="#fff" size={25}/>
                }
            </TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.btnAvançar} onPress={() => navigation.navigate('Home')}><Text style={styles.txtAvançar}>Avançar</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',
    },
    TxtEmail:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:18,
        marginTop:10,
        marginBottom:10,
    },
    inputEmail:{
        marginLeft:25,
        width:'85%',
        color:'#fff'
    },

    TxtSenha:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        marginLeft:18,
        marginTop:10,
        marginBottom:10,
    },

    InputArea:{
        marginLeft:10,
        width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    InputSenha:{
        width:'85%',
        color:'#fff',
    },

    btnAvançar:{
        marginTop:70,
        width:'100%',
        alignItems:'center',
    },

    txtAvançar:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    }
})