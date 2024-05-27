import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    menuContainer: ViewStyle;
    imageLogoSiska: ImageStyle;
    imageUser: ImageStyle;
    dataUserContainer: ViewStyle;
    textNameUser: ViewStyle;
    touchSesion: ViewStyle;
    modalView: ViewStyle;
    buttonClose: ViewStyle;
    buttonCancel: ViewStyle;
    textStyle: TextStyle;
    modalText: TextStyle;
    centeredView: ViewStyle;
    button: ViewStyle;
}

export function stylesMenu(): Styles {
    return StyleSheet.create ({
        menuContainer: {
            height: 120,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#e9e9e9'
        },
        dataUserContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 22
        },
        imageLogoSiska: {
            width: 80,
            height: 80,
            marginTop: 22
        },
        textNameUser: {
            fontSize: 16, 
            position: 'absolute', 
            right: 70
        },
        imageUser: {
            marginVertical: 4,
            height: 35, 
            width: 35
        },
        touchSesion: {
            width: 50,
            height: 50,
            borderRadius: 200,
            borderWidth: 2, 
            borderColor: 'black',
            borderStyle: 'solid',
            alignItems: 'center'
        },
        modalView: {
            margin: 20,
            backgroundColor: '#cccccc',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: 'black',
            elevation: 220
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        buttonCancel: {
            backgroundColor: '#f44336',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
            marginTop: 10,
        },
    });
}