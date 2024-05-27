import React from "react";
import { View, Text, Image} from "react-native";// Importa el hook useRoute
import { stylesCarnet } from "../styles/StylesCarnet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

export default function CarnetScreen() {
  const { uri } = useSelector((state: RootState) => state.image);// Obtiene la URI de la imagen de las propiedades de la ruta

  return(
    <View style={stylesCarnet().container}>
      <View style={stylesCarnet().headerCarnet}>
        <Text style={stylesCarnet().textUniversity}>UNIVERSIDAD LIBRE</Text>
        <Image source={require('../images/Logo_uni_libre.png')} style={stylesCarnet().imageUniLibre}/>
      </View>
      <View style={stylesCarnet().carnetContainer}>
        <Image 
          source={uri ? { uri } : require('../images/user.jpg')}
          style={stylesCarnet().imageUser}
        />
        <Text style={stylesCarnet().textDataCarnet}>SANTIAGO ORJUELA VERA</Text>
        <Text style={stylesCarnet().textDataCarnet}>INGENIERIA DE SISTEMAS</Text>
        <Text style={stylesCarnet().textDataCarnet}>PREGRADO</Text>
        <Text style={stylesCarnet().textDataCarnet}>1001299895</Text>
        <Image 
          source={require('../images/QR.png')}
          style={stylesCarnet().QRImage}
        />
        <Text style={stylesCarnet().textDataCarnet}>Cod. Estudiante: 07622115</Text>
      </View>
    </View>
  );
}
