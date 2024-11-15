import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from '../GlobalStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Estudos = () => {

    return (
        <LinearGradient style={styles.estudos} locations={[0, 0.5, 1]} colors={['#333', 'rgba(34, 34, 34, 0.7)', 'rgba(17, 17, 17, 0.07)']}>
            <Text style={[styles.agenda, styles.estudosTypo]}>Agenda</Text>
            <Text style={[styles.notas, styles.estudosTypo]}>Notas</Text>
            <Text style={[styles.provasPendentes, styles.estudosTypo]}>Provas Pendentes</Text>
        </LinearGradient>);
};



const styles = StyleSheet.create({
    estudosTypo: {
        textAlign: "center",
        color: Color.colorWhite,
        fontFamily: FontFamily.impact,
        fontSize: FontSize.size_xl,
        position: "absolute",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
    multiLayout: {
        height: 195,
        width: 248,
        position: "absolute"
    },
    estudosItemLayout: {
        height: 101,
        width: 131,
        backgroundColor: 'linear-gradient(to top, #050505 100%, #1A1A1A 70%, #080808 7%)',
        position: "absolute",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
    agenda: {
        borderRadius: 30,
        backgroundColor: 'black',
        boxShadow: 'black 0px 0px 30px',
        padding: 35,
        top: 547,
        width: 206,
        height: 100,
        left: 110,
        color: Color.colorWhite,
        fontFamily: FontFamily.impact,
        fontSize: FontSize.size_xl,
        position: "absolute",
        display: 'flex',
        textAlign: 'center',
    },
    notas: {
        borderRadius: 30,
        backgroundColor: 'black',
        padding: 35,
        top: 420,
        width: 206,
        height: 100,
        left: 110,
        boxShadow: 'black 0px 0px 30px',
        color: Color.colorWhite,
        fontFamily: FontFamily.impact,
        fontSize: FontSize.size_xl,
        position: "absolute",
        display: 'flex',
        textAlign: 'center',
    },
    provasPendentes: {
        borderRadius: 30,
        backgroundColor: 'black',
        padding: 35,
        top: 300,
        width: 206,
        height: 100,
        left: 110,
        boxShadow: 'black 0px 0px 30px',
        color: Color.colorWhite,
        fontFamily: FontFamily.impact,
        fontSize: FontSize.size_xl,
        position: "absolute",
        display: 'flex',
        textAlign: 'center',
    },
    estudosChild: {
        top: -144,
        left: -193
    },
    estudosItem: {
        top: 179,
        left: 111
    },
    multiScrInner: {
        top: -914,
        left: -554
    },
    rectangleView: {
        top: 949,
        left: 472
    },
    estudos: {
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
        opacity: 0.75,
        backgroundColor: "transparent",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    }
});

export default Estudos;
