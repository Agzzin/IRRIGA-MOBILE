import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet ,KeyboardAvoidingView, TextInput, InputAccessoryView } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default function Senha(){

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);


    return(
        <KeyboardAvoidingView style={styles.Container}>
            <Text style={styles.TxtCrie}>Crie uma senha</Text>
            <View style={styles.InputArea}>
                <TextInput style={styles.input}
                 placeholder=""
                 selectionColor={"#fff"}
                 value={input}
                 onChange={(texto) => setInput(texto)}
                 secureTextEntry={hidePass}
                />
                <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    { hidePass ?
                    <Ionicons name="eye" color="#fff" size={25} style={styles.icon}/>
                    :
                    <Ionicons name="eye-off" color="#fff" size={25}/>
                    }

                </TouchableOpacity>
            </View>
            <Text style={styles.TxtUse}>Use pelo menos 10 caracteres.</Text>
            <TouchableOpacity style={styles.BtnAvancar}><Text style={styles.txtAvancar}>Avançar</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'black',
    },
    TxtCrie:{
        color:'#fff',
        fontSize:27,
        fontWeight:"bold",
        lineHeight:35,
        marginTop:55,
        marginLeft:13, 
    },

    InputArea:{
        flexDirection:"row",
        width:'95%',
        backgroundColor:'black',
        borderRadius:5,
        alignItems:'center',
    },

    input:{
        width:'85%',
        height:50,
        color:'#fff',
        marginLeft:20,
    },

    icon:{
        justifyContent:'center',
        alignItems:'center',
    },

    TxtUse:{
        color:'#fff',
        fontSize:13,
        fontWeight:'600',
        marginLeft:13,
    },

    BtnAvancar:{
        width:'100%',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },

    txtAvancar:{
        fontWeight:'bold',
        fontSize:16,
        color:'#fff'
    }
})