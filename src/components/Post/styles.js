import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        margin: 10,
      },
      image: {
        width: '100%',
        aspectRatio:3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
      },

      postTitle: {
        marginVertical: 10,
        fontSize: 18,
        color: '#5b5b5b',
      },
      postDescription: {
        fontSize: 16,
        lineHeight: 24,
      },
      postPrice: {
        fontSize: 18,
        marginVertical: 10,
      },
      postOldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
      },
      postNewPrice: {
        fontWeight: 'bold',
      },
      postTotalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
      }
});

export default styles