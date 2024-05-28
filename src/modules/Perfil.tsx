import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, Linking } from "react-native";
import { stylesPerfil } from "../styles/StylesPerfil";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import { RootState } from "../../redux/types";
import { setImageUri } from "../../redux/imageSlice";
import { useNavigation } from '@react-navigation/native';

export default function PerfilScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const imageUri = useSelector((state: RootState) => state.image.uri); 
    const [isFocused, setIsFocused] = useState({ celphone: false, personalEmail: false });
    const [messageVisible, setMessageVisible] = useState(false);
    const [celphone, setCelphone] = useState('3028370313');
    const [personalEmail, setPersonalEmail] = useState('orjuelasantiago1152002@gmail.com');
    const [placeholderColors, setPlaceholderColors] = useState({ celphone: 'white', personalEmail: 'white' });

    const handleFocus = (field: string) => {
        setIsFocused({ ...isFocused, [field]: true });
        setPlaceholderColors({ ...placeholderColors, [field]: 'black' });
    };
    
    const handleBlur = (field: string) => {
        setIsFocused({ ...isFocused, [field]: false });
        setPlaceholderColors({ ...placeholderColors, [field]: celphone === '' && field === 'celphone' || personalEmail === '' && field === 'personalEmail' ? 'white' : 'black' });
    };

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

    const handleSave = () => {
        if(personalEmail != '' || celphone != '') {       
            setMessageVisible(true);
            setTimeout(() => {
                setMessageVisible(false);
            }, 3000);
        }
    };


    const handleSiul = () => {
        Linking.openURL('https://siul.unilibre.edu.co/sinugwt/');
    };

    return (
        <ImageBackground 
            source={require('../images/background.png')}
            style={stylesPerfil().container}
        >
            {messageVisible && (
                <View style={stylesPerfil().messageContainer}>
                    <Text style={stylesPerfil().messageText}>CAMBIOS GUARDADOS CON ÉXITO</Text>
                </View>
            )}
            <View style={stylesPerfil().headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../images/left-arrow.png')}
                        style={stylesPerfil().imageArrow}
                    />
                </TouchableOpacity>
                <Text style={stylesPerfil().textPerfil}>PERFIL</Text>
                <Image 
                    source={require('../images/Logo_access_siska_s_t.png')}
                    style={stylesPerfil().imageLogoApp}
                />
            </View>
            <ScrollView contentContainerStyle={stylesPerfil().scrollContainer}>
                <View style={stylesPerfil().containerDataUser}>
                    <View style={stylesPerfil().dataInneditableBox}>
                        <View style={stylesPerfil().boxTextDataUser}>  
                            <Text style={stylesPerfil().dataOfUserText}>DATOS DEL USUARIO</Text>  
                        </View>
                        <View style={stylesPerfil().boxName}>
                            <Text style={stylesPerfil().textName}>nombres</Text>
                            <TextInput editable={false} style={stylesPerfil().inputDataI}>Santiago</TextInput>
                        </View>
                        <View style={stylesPerfil().boxName}>
                            <Text style={stylesPerfil().textName}>apellidos</Text>
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
                                isFocused.celphone && stylesPerfil().inputFocused,
                                { color: isFocused.celphone || celphone === '' ? 'black' : 'white' }
                            ]}
                            onFocus={() => handleFocus('celphone')} 
                            onBlur={() => handleBlur('celphone')}
                            placeholderTextColor={placeholderColors.personalEmail}
                            value={celphone}
                            onChangeText={setCelphone}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={stylesPerfil().boxEmail}>
                        <Text style={stylesPerfil().textData}>Correo</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInS}>
                            santiago-orjuelav@unilibre.edu.co
                        </TextInput>
                    </View>
                    <View style={stylesPerfil().boxPersonalEmail}>
                        <Text style={stylesPerfil().textPersonalEmail}>Correo personal</Text>
                        <TextInput
                            style={[
                                stylesPerfil().inputsEdit,
                                isFocused.personalEmail && stylesPerfil().inputFocused,
                                { color: isFocused.personalEmail || personalEmail === '' ? 'black' : 'white'}
                            ]} 
                            onFocus={() => handleFocus('personalEmail')} 
                            onBlur={() => handleBlur('personalEmail')}
                            placeholderTextColor={placeholderColors.celphone}
                            value={personalEmail}
                            onChangeText={setPersonalEmail}
                        />
                    </View>
                </View>
                <View style={stylesPerfil().infoAcaContainer}>
                    <Text style={stylesPerfil().infoAcaText}>INFORMACION ACADEMICA</Text>
                    <View style={stylesPerfil().infoSeccionalBox}>
                        <Text style={stylesPerfil().textDataSecc}>Seccional</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInS}>Bogotá</TextInput>
                    </View>
                    <View style={stylesPerfil().infoSedeBox}>
                        <Text style={stylesPerfil().textData}>Sede</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInS}>Bosque popular</TextInput>
                    </View>
                    <View style={stylesPerfil().infoProgBox}>
                        <Text style={stylesPerfil().textDataProg}>Programa</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInS}>Ingenieria de sistemas</TextInput>
                    </View>
                    <View style={stylesPerfil().infoPensumBox}>
                        <Text style={stylesPerfil().textDataPensum}>Pensum</Text>
                        <TextInput editable={false} style={stylesPerfil().inputDataInS}>66806</TextInput>
                    </View>
                </View>
                <View style={stylesPerfil().boxButtons}>
                    <TouchableOpacity style={stylesPerfil().buttonG} onPress={handleSave}>
                        <Text style={stylesPerfil().textG}>Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesPerfil().buttonSiul} onPress={handleSiul}>
                        <View style={stylesPerfil().buttonSiulBox}>
                            <Text style={stylesPerfil().textSiul}>Ir a Siul</Text>
                            <Image
                               source={require('../images/siul.png')}
                               style={stylesPerfil().imageSiul}
                            />
                        </View>
                    </TouchableOpacity>    
                </View>
            </ScrollView>
        </ImageBackground>
    );
}
