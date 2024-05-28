import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/modules/Login';
import HomeScreen from './src/modules/Home';
import CarnetScreen from './src/modules/Carnet';
import PerfilScreen from './src/modules/Perfil';
import ReportsScreen from './src/modules/Reports';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import StayScreen from './src/modules/Stay';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  UserCarnet: undefined;
  Perfil: undefined;
  Reports: undefined;
  Stay: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserCarnet" component={CarnetScreen}/>
          <Stack.Screen name="Perfil" component={PerfilScreen}/>
          <Stack.Screen name="Reports" component={ReportsScreen}/>
          <Stack.Screen name="Stay" component={StayScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
