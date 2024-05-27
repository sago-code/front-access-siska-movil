import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type Styles = {
  container: ViewStyle;
  loginBox: ViewStyle;
  title: TextStyle;
  input: ViewStyle;
  inputFocused: ViewStyle;
  button: ViewStyle;
  imageLogo: ImageStyle;
  imageUniLogo: ImageStyle;
};

export function stylesLogin(): Styles {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginBox: {
      alignItems: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      width: 275,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#6d6d6d',
    },
    inputFocused: {
      backgroundColor: '#bebebe',
    },
    button: {
      width: 190,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    imageLogo: {
      width: 190,
      height: 190,
      marginBottom: 20,
    },
    imageUniLogo: {
      width: 80,
      height: 80,
      marginBottom: 20,
      position: 'absolute',
      top: 45,
      right: 20,
    }
  });
}
