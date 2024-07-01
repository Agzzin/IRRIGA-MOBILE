import React from "react";
import { View,TextInput, Text,KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";   


 export default function SignIN({navigation}){
  return(
    <KeyboardAvoidingView style={styles.containerC}>
      <Text style={styles.TxtC}>Qual é o seu{'\n'}e-mail?</Text>
      <TextInput style={styles.InputEmail}
      selectionColor={"#fff"}
      placeholder=''/>
      <Text style={styles.Txtconfirm}>Você vai ter que confirmar esse e-mail mais
      {'\n'}tarde.</Text>
      <TouchableOpacity style={styles.BtnAvancar} onPress={() =>navigation.navigate('Senha')}><Text style={styles.TxtAvancar}>Avançar</Text></TouchableOpacity>
    </KeyboardAvoidingView> 
  )
}

const styles = StyleSheet.create({
  containerC:{
    flex:1,
    backgroundColor:'black',
  },

  TxtC:{
    color:'#fff',
    fontSize:35,
    fontWeight:"bold",
    lineHeight:35,
    marginTop:55,
    marginLeft:13, 
   },

   InputEmail:{
    marginLeft:25,
    marginTop:15,
    marginBottom:15,
    color:'#fff',
    fontWeight:'400',
    
   },

   Txtconfirm:{
    color:'#fff',
    fontWeight:'600',
    fontSize:12,
    marginLeft:13,
    marginBottom:20,
   },

   BtnAvancar:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    padding:18,
    borderRadius:50,
   },

   TxtAvancar:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
   },

})
  