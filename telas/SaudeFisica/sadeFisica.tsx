import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const SaudeFisica: React.FC = () => {  // Tipando como um Functional Component
  return (
    <LinearGradient style={styles.SaudeFisica} locations={[0, 0.5, 1]} colors={['#333', 'rgba(34, 34, 34, 0.7)', 'rgba(17, 17, 17, 0.07)']}>
      <Text style={[styles.rotina, styles.SaudeFisicasTypo]}>Crie sua rotina</Text>
      <Text style={[styles.exercicios, styles.SaudeFisicasTypo]}>Exercicios</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  SaudeFisicasTypo: {
    textAlign: 'center',
    color: Color.colorWhite,
    fontFamily: FontFamily.impact,
    fontSize: FontSize.size_xl,
    position: 'absolute',
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  rotina: {
    borderRadius: 30,
    backgroundColor: 'black',
    padding: 35,
    top: 220,
    width: 266,
    height: 100,
    left: 80,
    boxShadow: 'black 0px 0px 30px',
    color: Color.colorWhite,
    fontFamily: FontFamily.impact,
    fontSize: FontSize.size_xl,
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
  },
  exercicios: {
    borderRadius: 30,
    backgroundColor: 'black',
    padding: 35,
    top: 100,
    width: 266,
    height: 100,
    left: 80,
    boxShadow: 'black 0px 0px 30px',
    color: Color.colorWhite,
    fontFamily: FontFamily.impact,
    fontSize: FontSize.size_xl,
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
  },

  headerBackTitleStyle: {
    fontSize: 14,
    fontFamily: 'Georgia',
  },
  SaudeFisica: {
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
    opacity: 0.90,
    backgroundColor: '#000000',
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
});

export default SaudeFisica;
