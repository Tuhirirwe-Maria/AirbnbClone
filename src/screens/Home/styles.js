import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create ({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent : 'center',
    },

    title: {
        fontSize: 90,
        fontWeight : 'bold',
        color : '#fff',
        width : '70%',
        paddingLeft: 20
    },
    button : {
        backgroundColor : '#fff',
        padding : 10,
        width : 200,
        borderRadius : 10,
        marginTop : 20,
        marginLeft : 20,
    }, 
    
    buttonText : {
        fontSize: 16,
        color : '#000',
        fontWeight : 'bold'
    },
    searchButton : {
        backgroundColor : '#fff',
        width : Dimensions.get('screen').width -40,
        padding : 15,
        borderRadius : 50,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems : "center",
        position : 'absolute',
        top : 20,
        zIndex : 100
    }, 
    
    searchButtonText : {
        fontSize: 16,
        fontWeight : 'bold',
        color : '#000',
    }
});
export default styles;