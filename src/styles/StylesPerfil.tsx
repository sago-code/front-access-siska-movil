import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    headerContainer: ViewStyle;
    scrollContainer: ViewStyle; 
    messageContainer: ViewStyle;
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
    boxButtons: ViewStyle;
    buttonSiulBox: ViewStyle;
    infoSeccionalBox: ViewStyle;
    infoSedeBox: ViewStyle;
    infoProgBox: ViewStyle;
    infoPensumBox: ViewStyle;
    infoAcaContainer: ViewStyle;
    boxTextDataUser: ViewStyle
    inputsEdit: ViewStyle;
    buttonG: ViewStyle;
    inputFocused: ViewStyle;
    buttonSiul: ViewStyle;
    imageUser: ImageStyle;
    infoAcaText: TextStyle;
    textDataSecc: TextStyle;
    textDataCarrer: TextStyle;
    textDataProg: TextStyle;
    textDataPensum: TextStyle;
    textG: TextStyle;
    textSiul: TextStyle;
    textName: TextStyle;
    textPerfil: TextStyle;
    messageText: TextStyle;
    imageSiul: ImageStyle;
    imageArrow: ImageStyle;
    imageLogoApp: ImageStyle;
}

export function stylesPerfil(): Styles {
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        headerContainer: {
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#e9e9e9'
        },
        scrollContainer: {
            paddingBottom: 20,
        },
        containerDataUser: {
            flex: 1,
            marginTop: 50,
            alignItems: 'flex-start',
            flexDirection: 'row',
        },
        infoSeccionalBox: {
            flex: 1,
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
        },
        infoSedeBox: {
            flex: 1,
            flexDirection: 'row',
            marginLeft: 5,
            marginTop: 20,
        },
        infoProgBox: {
            flex: 1,
            flexDirection: 'row',
            marginRight: 10,
            marginTop: 20,
        },
        infoPensumBox: {
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            marginRight: 8
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
        boxButtons: {
            flexDirection: 'row',
            marginTop: 20,
            marginLeft: 25,
            alignItems: 'center'
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
        },
        inputFocused: {
            backgroundColor: '#bebebe',
        },
        textData: {
            marginRight: 20,
            marginTop: 10,
            fontWeight: 'bold',
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
            fontWeight: 'bold',
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
            marginTop: 10,
            fontWeight: 'bold',
        },
        textDataCarrer: {
            marginRight: 10,
            marginTop: 10,
            fontWeight: 'bold',
        },
        textDataProg: {
            marginRight: 4,
            marginTop: 10,
            fontWeight: 'bold',
        },
        textDataPensum: {
            marginRight: 10,
            marginTop: 10,
            fontWeight: 'bold',
        },
        buttonG: {
            width: 150,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#7fbd93'
        },
        buttonSiul: {
            width: 150,
            padding: 10,
            marginLeft: 15,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: '#4eacd8'
        },
        textG: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
        },
        textSiul: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
        },
        buttonSiulBox: {
            flexDirection: 'row',
        },
        imageSiul: {
            width: 20,
            height: 20,
            marginLeft: 10
        },
        messageContainer: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '12%',
            backgroundColor: 'green',
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1
        },
        messageText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 25
        },
        textName: {
            fontWeight: 'bold',
        },
        imageArrow: {
            width: 40,
            height: 40,
            marginTop: 20,
            marginRight: 30
        },
        textPerfil: {
            marginTop: 20,
            marginRight: 20,
            fontSize: 20,
            fontWeight: 'bold',
        },
        imageLogoApp: {
            width: 55,
            height: 55,
            marginTop: 20,
        },
    });
}