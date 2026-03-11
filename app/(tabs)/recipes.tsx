import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Text, View } from "react-native"
import { StyleSheet } from "react-native"
const Recipes = ()  =>{
    return (
      <SafeAreaView style = {styles.container}>
        <View style={styles.header}>
            <Image source={require('../../assets/images/white.png')} style = {styles.logo}/>
          
        </View>

        <View style={styles.main}>

        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container :{
    backgroundColor: "#008080",
    flex:1,
    padding:9
   },
    header:{
     alignItems: "center",
      gap:10,
      padding:10
    },
   logo:{
    width:50,
    height:50,
    marginTop:10,
    marginBottom: 10
   },
    main:{
        backgroundColor: "#ffff",
        flex:1,
        borderRadius:15
    }
})

export default Recipes