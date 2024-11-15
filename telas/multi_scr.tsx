import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from './GlobalStyles';

const MultiScr: React.FC = () => {
    return (
        <LinearGradient style={styles.multiScr} locations={[0, 0.5, 1]} colors={['#333', 'rgba(34, 34, 34, 0.7)', 'rgba(17, 17, 17, 0.07)']}>
            <Text style={[styles.sadeFisca, styles.estudosTypo]}>Saúde Fisica</Text>
            <Text style={[styles.tarefasDirias, styles.estudosTypo]}>Tarefas</Text>
            <Text style={[styles.estudos, styles.estudosTypo]}>Estudos</Text>
        </LinearGradient>
    );
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
    multiScrItemLayout: {
        height: 101,
        width: 131,
        backgroundColor: 'black',
        position: "absolute",
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
    sadeFisca: {
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
        position: 'absolute',
        display: 'flex',
        textAlign: 'center',
    },
    tarefasDirias: {
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
        position: 'absolute',
        display: 'flex',
        textAlign: 'center',
    },
    estudos: {
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
        position: 'absolute',
        display: 'flex',
        textAlign: 'center',
    },

    multiScrChild: {
        top: -144,
        left: -193
    },
    multiScrItem: {
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
    multiScr: {
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden",
        opacity: 0.90,
        backgroundColor: '#000000',
        transform: [
            {
                rotate: "180deg"
            }
        ]
    },
});

export default MultiScr;
