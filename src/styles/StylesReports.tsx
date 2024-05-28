import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    headerContainer: ViewStyle;
    contentContainer: ViewStyle;
    pickerTypeReportContainer: ViewStyle;
    pickerTypeReport: ViewStyle;
    inputDescription: ViewStyle;
    inputFocused: ViewStyle;
    touchHour: ViewStyle;
    buttonSendRep: ViewStyle;
    messageContainer: ViewStyle;
    messageErrorContainer: ViewStyle;
    timeInput: TextStyle;
    textReport: TextStyle;
    textTypeReport: TextStyle;
    typeReportText: TextStyle;
    textDescription: TextStyle;
    textHourOfProb: TextStyle;
    textSendReport: TextStyle;
    messageText: TextStyle;
    imageArrow: ImageStyle;
    imageLogoApp: ImageStyle;
}

export function stylesReports(): Styles {
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
        imageArrow: {
            width: 40,
            height: 40,
            marginTop: 20,
            marginRight: 30
        },
        textReport: {
            marginTop: 20,
            marginRight: 20,
            fontSize: 20,
            fontWeight: 'bold',
        },
        textTypeReport: {
            marginBottom: 15,
            marginRight: 20,
            fontSize: 20,
            fontWeight: 'bold',
        },
        textDescription: {
            marginTop: 15,
            marginRight: 20,
            fontSize: 20,
            fontWeight: 'bold',
        },
        textHourOfProb: {
            marginTop: 15,
            marginRight: 20,
            fontSize: 20,
            fontWeight: 'bold',
        },
        imageLogoApp: {
            width: 55,
            height: 55,
            marginTop: 20,
        },
        contentContainer: {
            marginTop: 80,
            alignItems: 'center',
        },
        typeReportText: {
            fontSize: 18,
            marginBottom: 10,
        },
        pickerTypeReport: {
            height: 50,
            width: '100%',
            color: 'white',
            backgroundColor: '#6d6d6d',
        },
        pickerTypeReportContainer: {
            height: 50,
            width: '80%',
            borderRadius: 10,
            backgroundColor: '#6d6d6d',
            overflow: 'hidden',
        },
        inputDescription: {
            marginTop: 20,
            height: 200,
            width: '80%',
            backgroundColor: '#6d6d6d',
            borderRadius: 10,
            padding: 10, 
        },
        inputFocused: {
            backgroundColor: '#bebebe',
        },
        timeInput: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            backgroundColor: '#6d6d6d',
            color: 'white',
            textAlign: 'center',
            fontSize: 14.5
        },
        touchHour: {
            width: 140,
            marginTop: 15
        },
        buttonSendRep: {
            width: 150,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 20
        },
        textSendReport: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
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
        messageErrorContainer: {
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '12%',
            backgroundColor: 'red',
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
    })
}