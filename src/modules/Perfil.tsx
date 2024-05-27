import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { stylesPerfil } from "../styles/StylesPerfil";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import { RootState } from "../../redux/types";
import { setImageUri } from "../../redux/imageSlice";

export default function PerfilScreen() {
    const dispatch = useDispatch();
    const imageUri = useSelector((state: RootState) => state.image.uri);
    const [isFocusedCelular, setIsFocusedCelular] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isPersonalEmail, setIsPersonalEmail] = useState(false); 
      
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }
      
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
      
        const uri = result.assets?.[0]?.uri;

        if (uri) {
            setImageUri(uri);
            dispatch(setImageUri(uri)); 
        } else {
            console.error('No se pudo obtener la URI de la imagen seleccionada');
        }
    };
    
    return (
        <ImageBackground 
            source={require('../images/background.png')}
            style={stylesPerfil().container}
        >
            <ScrollView contentContainerStyle={stylesPerfil().scrollContainer}>
                <View style={stylesPerfil().containerDataUser}>
                    <View style={stylesPerfil().dataInneditableBox}>
                        <View style={stylesPerfil().boxTextDataUser}>  
                            <Text style={stylesPerfil().dataOfUserText}>DATOS DEL USUARIO</Text>  
                        </View>
                        <View style={stylesPerfil().boxName}>
                            <Text>nombres</Text>
                            <TextInput editable={false} style={stylesPerfil().inputDataI}>Santiago</TextInput>
                        </View>
                        <View style={stylesPerfil().boxName}>
                            <Text>apellidos</Text>
                            <TextInput editable={false} style={stylesPerfil().inputDataI}>Orjuela Vera</TextInput>
                        </View>
                    </View>
                    <TouchableOpacity onPress={pickImage}>
                        <Image 
                            source={imageUri ? { uri: imageUri } : require('../images/user.jpg')}
                            style={stylesPerfil().imageUser}
                        />
                    </TouchableOpacity>
                </View>
                <View style={stylesPerfil().boxDataContact}>
                    <View style={stylesPerfil().boxDoc}>
                        <Text style={stylesPerfil().textDoc}>Documento</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInDo}>1001299895</TextInput>
                    </View>
                    <Text style={stylesPerfil().dataContactText}>DATOS DE CONTACTO</Text>
                    <View style={stylesPerfil().boxCelcho}>
                        <Text style={stylesPerfil().textData}>Celular</Text>
                        <TextInput
                            style={[
                                stylesPerfil().inputsEdit, 
                                { 
                                    color: isFocusedCelular ? 'black' : 'white', 
                                    backgroundColor: isFocusedCelular ? '#bebebe' : '#6d6d6d' // Cambiar el color de fondo según si está enfocado o no
                                }
                            ]} 
                            onFocus={() => setIsFocusedCelular(true)} 
                            onBlur={() => setIsFocusedCelular(false)} 
                        >
                            3028370313
                        </TextInput>
                    </View>
                    <View style={stylesPerfil().boxEmail}>
                        <Text style={stylesPerfil().textData}>Correo</Text>
                        <TextInput
                            style={[
                                stylesPerfil().inputsEdit, 
                                { 
                                    color: isFocusedEmail ? 'black' : 'white', 
                                    backgroundColor: isFocusedEmail ? '#bebebe' : '#6d6d6d'
                                }
                            ]} 
                            onFocus={() => setIsFocusedEmail(true)} 
                            onBlur={() => setIsFocusedEmail(false)} 
                        >
                            santiago-orjuelav@unilibre.edu.co
                        </TextInput>
                    </View>
                    <View style={stylesPerfil().boxPersonalEmail}>
                        <Text style={stylesPerfil().textPersonalEmail}>Correo personal</Text>
                        <TextInput
                            style={[
                                stylesPerfil().inputsEdit, 
                                { 
                                    color: isPersonalEmail ? 'black' : 'white', 
                                    backgroundColor: isPersonalEmail ? '#bebebe' : '#6d6d6d'
                                }
                            ]} 
                            onFocus={() => setIsPersonalEmail(true)} 
                            onBlur={() => setIsPersonalEmail(false)} 
                        >
                            orjuelasantiago1152002@gmail.com
                        </TextInput>
                    </View>
                </View>
                <View style={stylesPerfil().infoAcaContainer}>
                    <Text style={stylesPerfil().infoAcaText}>INFORMACION ACADEMICA</Text>
                    <View style={stylesPerfil().infoSeccionalBox}>
                        <Text style={stylesPerfil().textDataSecc}>Seccional</Text>
                        <TextInput style={stylesPerfil().inputDataInS}>
                            Bogotá
                        </TextInput>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
