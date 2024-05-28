import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import { stylesStay } from '../styles/StylesStay';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function StayScreen() {
    const navigation = useNavigation();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [countdownMinutes, setCountdownMinutes] = useState(10);
    const [countdownSeconds, setCountdownSeconds] = useState(59);
    const [alarmText, setAlarmText] = useState('LA ALARMA PARA SALIDA SONARA EN: ');
    const [alarmTextColor, setAlarmTextColor] = useState('black');
    const [countdownTextColor, setCountdownTextColor] = useState('black');
    const [alarmActive, setAlarmActive] = useState(false);
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 59) {
                    setMinutes(prevMinutes => {
                        if (prevMinutes === 59) {
                            setHours(prevHours => prevHours + 1);
                            return 0;
                        }
                        return prevMinutes + 1;
                    });
                    return 0;
                }
                return prevSeconds + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCountdownSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    if (countdownMinutes === 0) {
                        clearInterval(countdownInterval);
                        playAlarm();
                        return 0;
                    } else {
                        setCountdownMinutes(prevMinutes => prevMinutes - 1);
                        return 59;
                    }
                }
                return prevSeconds - 1;
            });

            if (countdownMinutes === 0 && countdownSeconds <= 10 && countdownSeconds > 0) {
                setAlarmText('Alarma para salida próxima a sonar');
                startBlinking();
            } else if(countdownMinutes === 0 && countdownSeconds === 0) {
                setAlarmText('ALARMA SONANDO, RETIRATE DE LA UNIVERSIDAD');
                startBlinking();
            }
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [countdownMinutes, countdownSeconds]);

    const playAlarm = async () => {
        const newSound = new Audio.Sound();
        try {
            await newSound.loadAsync(require('../sounds/alarm.mp3'), { isLooping: true });
            await newSound.playAsync();
            setAlarmActive(true);
            setSound(newSound);
        } catch (error) {
            console.error('Error playing sound: ', error);
        }
    };
    
    const stopAlarm = async () => {
        setAlarmActive(false);
        if (sound) {
            try {
                await sound.stopAsync();
                setSound(null);
            } catch (error) {
                console.error('Error stopping sound: ', error);
            }
        }
    };

    const startBlinking = () => {
        const blinkInterval = setInterval(() => {
            setAlarmTextColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));
            setCountdownTextColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));
        }, 500);

        setTimeout(() => {
            clearInterval(blinkInterval);
            setAlarmTextColor('black');
            setCountdownTextColor('black');
        }, 10000);
    };

    const dailySchedule = [
        { hour: '06:30pm - 8:00pm', activity: 'Diseño en ingenieria' },
        { hour: '8:00pm - 10:00pm', activity: 'Probabilidad y estadistica' },
    ];

    return (
        <ImageBackground
            source={require('../images/background.png')}
            style={stylesStay().container}
        >
            <View style={stylesStay().headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image 
                        source={require('../images/left-arrow.png')}
                        style={stylesStay().imageArrow}
                    />
                </TouchableOpacity>
                <Text style={stylesStay().textReport}>ESTADIA</Text>
                <Image 
                    source={require('../images/Logo_access_siska_s_t.png')}
                    style={stylesStay().imageLogoApp}
                />
            </View>
            <View style={stylesStay().hoursContainer}>
                <Text style={stylesStay().timeInTheUText}>TIEMPO DENTRO DE LA UNIVERSIDAD</Text>
                <Text style={stylesStay().timeText}>
                    {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
                </Text>
            </View>
            <View style={stylesStay().scheduleContainer}>
                <Text style={stylesStay().scheduleText}>HORARIO DEL DIA</Text>
                {dailySchedule.map((item, index) => (
                    <View style={stylesStay().scheduleRow} key={index}>
                        <Text style={stylesStay().scheduleCell}>{item.hour}</Text>
                        <Text style={stylesStay().scheduleCell}>{item.activity}</Text>
                    </View>
                ))}
            </View>
            <View style={stylesStay().alarmContainer}>
                <Text style={[stylesStay().alarmText, { color: alarmTextColor }]}>{alarmText}</Text>
                <Text style={[stylesStay().countdownText, { color: countdownTextColor }]}>
                    {`00:${countdownMinutes.toString().padStart(2, '0')}:${countdownSeconds.toString().padStart(2, '0')}`}
                </Text>   
                {alarmActive && (
                    <View style={stylesStay().botonBox}>
                        <TouchableOpacity onPress={stopAlarm}>
                            <Text style={stylesStay().stopAlarmText}>Detener alarma</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
}
