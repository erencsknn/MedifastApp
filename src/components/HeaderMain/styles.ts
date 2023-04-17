import { Dimensions, StyleSheet } from "react-native"

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerMain : {
        height : height *0.085,
        backgroundColor : '#3d0c45',
    },
    headerOne : {
        height : height*0.090,
        width : '80%',
        backgroundColor : 'white',
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : '5%',
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,

    },
    image : {
        width : 30,
        height : 30,
    },
    headerOneView : {
        flexDirection : 'row',
        alignItems : 'center',
        marginLeft : 8,
        borderLeftColor : '#F3F2FD',
        borderLeftWidth : 3,


    },
    headerTwo : {
        width : '20%',
        height : height * 0.090,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 5,
        marginLeft : 17




    }


})

export default styles;


