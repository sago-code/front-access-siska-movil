import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, ImageBackground } from 'react-native';
import { stylesLogin } from '../styles/StylesLogin';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: LoginProps) {
  const [userDocument, setUserDocument] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState({ userDocument: false, password: false });
  const [placeholderColors, setPlaceholderColors] = useState({ userDocument: 'white', password: 'white' });

  const handleLogin = () => {
    if (userDocument === '1001299895' && password === '12345') {
      navigation.navigate('Home');
    } else {
      setErrorMessage('Documento o contraseña incorrecta.');
    }
  };

  const handleFocus = (field: string) => {
    setIsFocused({ ...isFocused, [field]: true });
    setPlaceholderColors({ ...placeholderColors, [field]: 'black' });
  };

  const handleBlur = (field: string) => {
    setIsFocused({ ...isFocused, [field]: false });
    setPlaceholderColors({ ...placeholderColors, [field]: userDocument === '' && field === 'userDocument' || password === '' && field === 'password' ? 'white' : 'black' });
  };

  return (
    <ImageBackground
      source={require('../images/background.png')}
      style={stylesLogin().container}
    >
      <Image
        source={require('../images/Logo_uni_libre.png')}
        style={stylesLogin().imageUniLogo}
      />
      <Image
        source={require('../images/Logo_access_siska.png')}
        style={stylesLogin().imageLogo}
      />
      <View style={stylesLogin().loginBox}>
        <Text style={stylesLogin().title}>Iniciar sesión</Text>
        <TextInput
          style={[
            stylesLogin().input,
            isFocused.userDocument && stylesLogin().inputFocused,
            { color: isFocused.userDocument || userDocument === '' ? 'black' : 'white' }
          ]}
          placeholder="Documento"
          keyboardType="numeric"
          placeholderTextColor={placeholderColors.userDocument}
          onChangeText={setUserDocument}
          value={userDocument}
          onFocus={() => handleFocus('userDocument')}
          onBlur={() => handleBlur('userDocument')}
        />
        <TextInput
          style={[
            stylesLogin().input,
            isFocused.password && stylesLogin().inputFocused,
            { color: isFocused.password || password === '' ? 'black' : 'white' }
          ]}
          placeholder="Contraseña"
          placeholderTextColor={placeholderColors.password}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          onFocus={() => handleFocus('password')}
          onBlur={() => handleBlur('password')}
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#515151' : '#b1b1b1',
            },
            stylesLogin().button
          ]}
          onPress={handleLogin}
        >
          {({ pressed }) => (
            <Text style={[
              {
                fontSize: 16,
                color: pressed ? 'white' : 'black',
              }
            ]}>
              Iniciar sesión
            </Text>
          )}
        </Pressable>
        <TouchableOpacity>
          <Text>¿Olvidó su contraseña?</Text>
        </TouchableOpacity>
        {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
      </View>
    </ImageBackground>
  );
}
