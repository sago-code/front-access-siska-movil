import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    scrollContainer: ViewStyle; 
    containerDataUser: ViewStyle;
    inputDataI: TextStyle;
    inputDataInDo: TextStyle;
    inputDataInS: TextStyle;
    textData: TextStyle;
    textDoc: TextStyle;
    dataContactText: TextStyle;
    dataOfUserText: TextStyle;
    textPersonalEmail: TextStyle;
    dataInneditableBox: ViewStyle;
    boxPersonalEmail: ViewStyle;
    boxDataContact: ViewStyle;
    boxDoc: ViewStyle;
    boxCelcho: ViewStyle;
    boxEmail: ViewStyle;
    boxName: ViewStyle;
    infoSeccionalBox: ViewStyle;
    infoAcaContainer: ViewStyle;
    boxTextDataUser: ViewStyle
    inputsEdit: ViewStyle;
    imageUser: ImageStyle;
    infoAcaText: TextStyle;
    textDataSecc: TextStyle;
}

export function stylesPerfil(): Styles {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        scrollContainer: {
            paddingBottom: 20, // Ajusta el valor según tus necesidades
        },
        containerDataUser: {
            flex: 1,
            marginTop: 260,
            alignItems: 'flex-start',
            flexDirection: 'row',
        },
        infoSeccionalBox: {
            flex: 1,
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
        },
        inputDataI: {
            width: 175,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: '#6d6d6d',
            color: '#d4d4d4',
            fontWeight: 'bold',
        },
        inputDataInDo: {
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: '#6d6d6d',
            color: '#d4d4d4',
            fontWeight: 'bold',
        },
        dataInneditableBox: {
            flexDirection: 'column',
            marginVertical: -32
        },
        boxName: {
            marginLeft: 15,
        },
        imageUser: {
            height: 150,
            width: 150,
            borderRadius: 100,
            marginLeft: 10
        },
        boxDataContact: {
            flex: 1,
            flexDirection: 'column',
            marginTop: 20,
            alignItems: 'center'
        },
        boxDoc: {
            flexDirection: 'row',
            marginTop: -10,
            marginRight: 16
        },
        boxCelcho: {
            flexDirection: 'row',
            marginTop: 20
        },
        boxEmail: {
            flexDirection: 'row',
            marginTop: 20
        },
        boxPersonalEmail: {
            flexDirection: 'row',
            marginTop: 20,
            marginRight: 10
        },
        inputsEdit: {
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: '#6d6d6d',
            color: 'white'
        },
        textData: {
            marginRight: 20,
            marginTop: 10
        },
        textDoc: {
            marginRight: 10,
            marginTop: 10,
            fontWeight: 'bold',
        },
        textPersonalEmail: {
            width: 60,
            textAlign: 'center',
            marginRight: 10,
        },
        dataContactText: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 15
        },
        dataOfUserText: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        boxTextDataUser: {
            marginBottom: 15,
            marginLeft: 15
        },
        infoAcaContainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        },
        infoAcaText: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20
        },
        inputDataInS: {
            width: 200,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: '#6d6d6d',
            color: '#d4d4d4',
            fontWeight: 'bold',
        },
        textDataSecc: {
            marginRight: 4,
            marginTop: 10
        }
    });
}