import React, { useState } from 'react';
import { View, Text, Platform, ImageBackground, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { stylesReports } from '../styles/StylesReports';

export default function ReportsScreen() {
    const navigation = useNavigation();
    const [reportType, setReportType] = useState('');
    const [desProm, setDesProm] = useState('');
    const [isFocused, setIsFocused] = useState({ desProm: false, timeInput: false });
    const [placeholderColors, setPlaceholderColors] = useState({ desProm: 'white', timeInput: 'white' });
    const [formattedTime, setFormattedTime] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [messageVisible, setMessageVisible] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleFocus = (field: string) => {
        setIsFocused({ ...isFocused, [field]: true });
        setPlaceholderColors({ ...placeholderColors, [field]: 'black' });
    };

    const handleBlur = (field: string) => {
        setIsFocused({ ...isFocused, [field]: false });
        setPlaceholderColors({ ...placeholderColors, [field]: desProm === '' && field === 'desProm' ? 'white' : 'black' });
    };

    const onChange = (event: any, selectedDate: Date | undefined) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const time = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        setFormattedTime(time);
    };

    const showTimePicker = () => {
        setShow(true);
    };

    const handleSave = () => {
        if(reportType != 'Selecciona una opción'  && desProm != '' && formattedTime != '') { 
            setMessageVisible(true);
            setTimeout(() => {
                setMessageVisible(false);
            }, 3000);
        } else {
            setMessageError(true);
            setTimeout(() => {
                setMessageError(false);
            }, 3000);
        }
    }

    return (
        <ImageBackground
            source={require('../images/background.png')}
            style={stylesReports().container}
        >
            {messageVisible && (
                <View style={stylesReports().messageContainer}>
                    <Text style={stylesReports().messageText}>REPORTE ENVIADO</Text>
                </View>
            )}
            {messageError && (
                <View style={stylesReports().messageErrorContainer}>
                    <Text style={stylesReports().messageText}>COMPLETA TODOS LOS CAMPOS</Text>
                </View>
            )}
            <View style={stylesReports().headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../images/left-arrow.png')}
                        style={stylesReports().imageArrow}
                    />
                </TouchableOpacity>
                <Text style={stylesReports().textReport}>REPORTES</Text>
                <Image 
                    source={require('../images/Logo_access_siska_s_t.png')}
                    style={stylesReports().imageLogoApp}
                />
            </View>
            <View style={stylesReports().contentContainer}>
                <Text style={stylesReports().textTypeReport}>Tipo de reporte</Text>
                <View style={stylesReports().pickerTypeReportContainer}>
                    <Picker
                        selectedValue={reportType}
                        style={stylesReports().pickerTypeReport}
                        onValueChange={(itemValue) => setReportType(itemValue)}
                    >
                        <Picker.Item label="Selecciona una opción" value="" />
                        <Picker.Item label="Problemas en la entrada" value="problemas_entrada" />
                        <Picker.Item label="Acoso" value="acoso" />
                        <Picker.Item label="Violencia Verbal" value="violencia_verbal" />
                        <Picker.Item label="Violencia Física" value="violencia_fisica" />
                        <Picker.Item label="Persona extraña dentro del plantel" value="persona_extraña" />
                        <Picker.Item label="Problema con guardia de seguridad" value="problema_guardia" />
                    </Picker>
                </View>
                <Text style={stylesReports().textDescription}>Descripcion del problema</Text>
                <TextInput
                    style={[
                        stylesReports().inputDescription, 
                        isFocused.desProm && stylesReports().inputFocused,
                        {
                            textAlignVertical: 'top',
                            color: isFocused.desProm || desProm === '' ? 'black' : 'white',
                        }
                    ]}
                    multiline={true}
                    placeholder='describe el problema...'
                    placeholderTextColor={placeholderColors.desProm}
                    onChangeText={setDesProm}
                    value={desProm}
                    onFocus={() => handleFocus('desProm')}
                    onBlur={() => handleBlur('desProm')}
                />
                <Text style={stylesReports().textHourOfProb}>Hora del problema</Text>
                <TouchableOpacity onPress={showTimePicker} style={stylesReports().touchHour}>
                    <TextInput
                        style={[
                            stylesReports().timeInput,
                            isFocused.timeInput && stylesReports().inputFocused,
                            {
                                color: isFocused.timeInput || formattedTime === '' ? 'black' : 'white',
                            }
                        ]}
                        placeholder='Selecciona la hora'
                        placeholderTextColor={placeholderColors.timeInput}
                        onFocus={() => handleFocus('timeInput')}
                        onBlur={() => handleBlur('timeInput')}
                        value={formattedTime}
                        editable={false}
                    />
                </TouchableOpacity>
                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#1651cf' : '#7f94c2',
                    },
                        stylesReports().buttonSendRep
                    ]}
                    onPress={handleSave}
                >
                    <Text style={stylesReports().textSendReport} >Enviar Reporte</Text>
                </Pressable>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="time"
                        is24Hour={false}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </ImageBackground>
    );
}