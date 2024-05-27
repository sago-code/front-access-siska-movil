import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    containerData: ViewStyle;
    row: ViewStyle;
    imagePerfil: ImageStyle;
    imageCarnet: ImageStyle;
    imageReport: ImageStyle;
    imageEst: ImageStyle;
    LogoApp: ImageStyle;
    buttonPerfil: ViewStyle;
    buttonCarnet: ViewStyle;
    buttonNov: ViewStyle;
    buttonEst: ViewStyle;
    footer: ViewStyle;
    textC: TextStyle;
}

export function stylesHome(): Styles {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#cccccc',
        },
        containerData: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        row: {
            marginVertical: -8,
            flexDirection: 'row',
            marginBottom: 50,
        },
        imagePerfil: {
            width: 115,
            height: 115,
            marginVertical: -15,
        },
        imageCarnet: {
            width: 105,
            height: 105,
            marginVertical: -15,
        },
        imageReport: {
            width: 80,
            height: 80,
            marginVertical: -4,
        },
        imageEst: {
            width: 80,
            height: 90,
            marginVertical: -5,
        },
        LogoApp: {
            width: 220,
            height: 90,
        },
        buttonPerfil: {
            width: 135,
            height: 135,
            padding: 10,
            borderRadius: 200,
            borderWidth: 2, 
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: '#e9e9e9',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
        },
        buttonCarnet: {
            width: 135,
            height: 135,
            padding: 10,
            borderRadius: 200,
            borderWidth: 2, 
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: '#e9e9e9',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
        },
        buttonNov: {
            width: 135,
            height: 135,
            padding: 10,
            borderRadius: 200,
            borderWidth: 2, 
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: '#e9e9e9',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
        },
        buttonEst: {
            width: 135,
            height: 135,
            padding: 10,
            borderRadius: 200,
            borderWidth: 2, 
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: '#e9e9e9',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
        },
        textC: {
            fontSize: 20,
        },
        footer: {
            alignItems: 'center'
        }
    });
}
