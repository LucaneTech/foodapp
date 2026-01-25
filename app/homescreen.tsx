import { Link } from 'expo-router';
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeScreen = ()=>{
  return(
    <SafeAreaView style ={styles.container}>
      <Text style = {styles.text}>
         <Link href={'/(tabs)/recipes'}> Hello</Link>
      </Text>
    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },

  text:{
    textAlign: "center",
    fontSize: 40,
    color: "black",
  }

})