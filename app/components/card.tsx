import { View , Text, StyleSheet} from "react-native"
import { Image } from "react-native"
type Props={
    image?: string,
    name?: string,
    price?: string
}

const Card = ({image, name, price}: Props) =>{
    return(
      <View style ={style.cardContainer}>
       <Image source={image && image} style ={style.image}/>
        <View>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </View>
      </View>
    )
}


const style = StyleSheet.create({
     cardContainer:{
        backgroundColor: "white",
        elevation:8,
        borderRadius: 10,
        padding: 8,

     },
      image :{
        width:100,
        height:100,
        borderRadius: 10, 
        marginBottom:10,
      }
})
export default Card