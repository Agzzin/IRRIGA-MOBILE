import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Perfil({navigation}){
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})