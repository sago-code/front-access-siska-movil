import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, ImageBackground, Modal } from "react-native";
import { stylesHome } from "../styles/StylesHome";
import { stylesMenu } from "../styles/StylesMenu";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: HomeProps) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = () => {
        setModalVisible(!modalVisible);
    };

    const handleConfirmLogout = () => {
        navigation.navigate('Login');
        setModalVisible(false);
    };

    const handleCarnet = () => {
        navigation.navigate('UserCarnet');
    }

    const handlePerfil = () => {
        navigation.navigate('Perfil');
    }

    const handleReports= () => {
        navigation.navigate('Reports');
    }

    const handleStay= () => {
        navigation.navigate('Stay');
    }


    return (
        <ImageBackground
            source={require('../images/background.png')}
            style={stylesHome().container}
        >
            <View style={stylesMenu().menuContainer}>
                <Image source={
                    require('../images/Logo_uni_libre.png')} 
                    style={stylesMenu().imageLogoSiska} />
                <View style={stylesMenu().dataUserContainer}>
                    <Text style={stylesMenu().textNameUser}>Santiago Orjuela</Text>
                    <TouchableOpacity style={stylesMenu().touchSesion} onPress={handleLogout}>
                        <Image source={require('../images/usuario.png')} style={stylesMenu().imageUser}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesHome().containerData}>
                <View style={stylesHome().row}>
                    <TouchableOpacity style={stylesHome().buttonPerfil} onPress={handlePerfil}>
                        <Image
                            source={require('../images/perfil.png')}
                            style={stylesHome().imagePerfil}
                        />
                        <Text style={stylesHome().textC}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHome().buttonCarnet} onPress={handleCarnet}>
                        <Image
                            source={require('../images/carnet.png')}
                            style={stylesHome().imageCarnet}
                        />
                        <Text style={stylesHome().textC}>Carnet</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesHome().row}>
                    <TouchableOpacity style={stylesHome().buttonNov} onPress={handleReports}>
                        <Image 
                            source={require('../images/report_of_nov.png')}
                            style={stylesHome().imageReport}
                        />
                        <Text style={stylesHome().textC}>Reportes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesHome().buttonEst} onPress={handleStay}>
                        <Image
                            source={require('../images/estadia.png')}
                            style={stylesHome().imageEst}
                        />
                        <Text style={stylesHome().textC}>Estadia</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={stylesHome().footer}>
                <Image 
                    source={require('../images/Logo_access_siska_t_l.png')}
                    style={stylesHome().LogoApp}
                />
            </View>

            {/*Modal para cerrar sesion*/}
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={stylesMenu().centeredView}>
                    <View style={stylesMenu().modalView}>
                        <Text style={stylesMenu().modalText}>¿Desea cerrar sesión?</Text>
                        <TouchableOpacity
                            style={[stylesMenu().button, stylesMenu().buttonClose]}
                            onPress={handleConfirmLogout}
                        >
                            <Text style={stylesMenu().textStyle}>Cerrar sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[stylesMenu().button, stylesMenu().buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={stylesMenu().textStyle}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}
