import React from "react";
import {View, Text, Image} from 'react-native'
import styles from "./styles";

const Post = () => {
    return(
        <View style = {styles.container }>
            <Image source={{uri: 'https://res.cloudinary.com/awesomeone-maria/image/upload/v1667819402/Airbnb/bed_o7fsr3.jpg'}} style = {styles.image} />
            {/* title */}
            <Text style = {styles.postTitle}>1 bed 1 bedroom</Text>
            {/* description */}
            <Text style = {styles.postDescription}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque   </Text>
            {/* price */}
            <Text style = {styles.postPrice}>
            <Text style = {styles.postOldPrice}>$46 </Text>
            <Text style = {styles.postNewPrice}>$36 / night</Text>
            </Text>
            {/* total price */}
            <Text style = {styles.postTotalPrice}>$230 total </Text>
        </View>
    )
}
 
export default Post