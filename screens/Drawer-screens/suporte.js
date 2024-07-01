import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Suporte(){
    return(
        <View style={styles.container}>
            <Text>Suporte</Text>
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