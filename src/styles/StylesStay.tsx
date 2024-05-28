import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    headerContainer: ViewStyle;
    hoursContainer: ViewStyle;
    scheduleContainer: ViewStyle;
    alarmContainer: ViewStyle;
    scheduleRow: ViewStyle;
    botonBox: ViewStyle;
    textReport: TextStyle;
    timeInTheUText: TextStyle;
    scheduleText: TextStyle;
    timeText: TextStyle;
    countdownText: TextStyle;
    scheduleCell: TextStyle;
    stopAlarmText: TextStyle;
    alarmText: TextStyle;
    imageArrow: ImageStyle;
    imageLogoApp: ImageStyle;
}

export function stylesStay(): Styles {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        headerContainer: {
            height: 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#e9e9e9'
        },
        alarmContainer: {
            alignItems: 'center',
            marginTop: 20
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
        imageLogoApp: {
            width: 55,
            height: 55,
            marginTop: 20,
        },
        hoursContainer: {
            alignItems: 'center',
            marginTop: 20
        },
        scheduleContainer: {
            alignItems: 'center',
            marginTop: 20
        },
        timeInTheUText: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 34
        },
        timeText: {
            fontSize: 50,
            fontWeight: 'bold',
            paddingTop: 15
        },
        countdownText: {
            fontSize: 50,
            fontWeight: 'bold',
            paddingTop: 15
        },
        scheduleText: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 15,
            marginBottom: 15
        },
        alarmText: {
            fontSize: 16,
            fontWeight: 'bold',
            paddingTop: 15,
            marginBottom: 15
        },
        scheduleRow: {
            width: 300,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#c7c7c7'
        },
        scheduleCell: {
            flex: 1,
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: '#000',
        },
        stopAlarmText: {
            color: 'white',
            padding: 10,
            textAlign: 'center',
            fontSize: 25,
            flexDirection: 'row',
        },
        botonBox: {
            alignItems: 'center',
            width: 250,
            height: 60,
            marginTop: 10,
            backgroundColor: 'red',
            borderRadius: 5,
        }
    })
}