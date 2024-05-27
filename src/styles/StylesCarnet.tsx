import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
    container: ViewStyle;
    carnetContainer: ViewStyle;
    imageUniLibre: ImageStyle;
    headerCarnet: ViewStyle;
    imageUser: ImageStyle;
    QRImage: ImageStyle;
    textUniversity: TextStyle;
    textDataCarnet: TextStyle;
}

export function stylesCarnet(): Styles {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#c7c7c7',
        },
        carnetContainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 40
        },
        imageUniLibre: {
            height: 100,
            width: 100,
            marginTop: 40,
            marginRight: 10
        },
        imageUser: {
            height: 200,
            width: 200,
            borderRadius: 100
        },
        headerCarnet: {
            height: 150,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'red'
        },
        QRImage: {
            height: 240,
            width: 240
        },
        textUniversity: {
            position: 'relative',
            top: 20, 
            width: 240,
            marginLeft: 10,
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        textDataCarnet: {
            fontWeight: 'bold',
        }
    });
}