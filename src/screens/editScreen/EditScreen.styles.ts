import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#ffffff',
        paddingBottom: 60,
        height: '100%',
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        fontWeight: 'bold',
        color: "#000000",
        fontSize: 20,
        margin: 20,
    },
    undoRedo: {
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        margin: 20,
    },
    image: {
        width: 300, 
        height: 300,
        marginBottom: 15,
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80808022'
      }
})