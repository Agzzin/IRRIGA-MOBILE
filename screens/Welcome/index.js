import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView,Image,TouchableOpacity,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function Welcome({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.container2}>
      <Image style={styles.logo} source={require("../../assets/logo.png")}/>
      <Text style={styles.txt}>Irrigando o futuro</Text>
      <Text style={styles.txt1}>gota a gota</Text>
    </View>
    <View style={styles.container3}>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('SignIN')}><Text style={styles.btnText}>Inscreva-se grátis</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btnGoogle}>
      <Image
      style={styles.lgGoogle}
      source={require("../../assets/logo-google.png")}
      /><Text style={styles.txtGoogle}>Continue com o Google</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btnApple}>
      <Image style={styles.lgApple} source={require("../../assets/logo-apple.png")}/><Text style={styles.txtApple}>Continue com Apple Id</Text></TouchableOpacity>
      <TouchableOpacity style={styles.entrar} onPress={() =>navigation.navigate('Entrar')}><Text style={styles.btnEntrar}>Entrar</Text></TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2:{
    flex:1,
    alignItems:'center',
  },

  container3:{
    flex:1,
  },

  logo:{
    width:180,
    height:180,
    marginTop:40,
  },

  txt:{
    marginLeft:10,
    fontSize:16,
    color:'#fff',
    fontWeight:'bold'
  },

  txt1:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
    lineHeight:15,
  },

  btn:{
    backgroundColor:"#00ff88",
    width:300,
    borderRadius:50,
    padding:18,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:30,
  },

  btnText:{
    color:"#fff",
    fontSize:15,
    fontWeight:'bold',
  },

  entrar:{
    width:300,
    borderRadius:50,
    padding:18,
    alignItems:'center',
    justifyContent:'center',
  },

  btnEntrar:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },

  btnGoogle:{
    width:300,
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"center",
    marginBottom:30,
  },

  txtGoogle:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15,
    marginLeft:0,
    marginRight:0,
  },

  lgGoogle:{
    width:25,
    height:25,
  },

  btnApple:{
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"center",
    marginRight:15,
  },

  lgApple:{
    width:25,
    height:25,
    marginRight:0,
  },

  txtApple:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15,
  },

  //Fim da tela Home 

});

