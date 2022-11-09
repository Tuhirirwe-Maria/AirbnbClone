import React from "react";
import {View, Text, Image} from 'react-native'
import styles from "./styles";

const Post = (props) => {

    const post = props.post

    return(
        <View style = {styles.container }>
            <Image source={{uri: post.image}} style = {styles.image} />
            {/* title */}
            <Text style = {styles.postTitle}>{post.bed} {post.bedroom} bedroom</Text>
            {/* description */}
            <Text style = {styles.postDescription} >
               {post.type}. 
               {post.title}
                </Text>
            {/* price */}
            <Text style = {styles.postPrice}>
            <Text style = {styles.postOldPrice}>${post.oldPrice}</Text>

            <Text style = {styles.postNewPrice}>  ${post.newPrice}/night</Text>
            </Text>
            {/* total price */}
            <Text style = {styles.postTotalPrice}>${post.totalPrice} total </Text>
        </View>
    )
}
 
export default Post