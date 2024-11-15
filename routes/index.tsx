import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MultiScr from '../Telas/multi_scr';
import Estudos from '../Telas/estudos';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="MultiScr">
      <Stack.Screen name="MultiScr" component={MultiScr} />
      <Stack.Screen name="Estudos" component={Estudos} />
    </Stack.Navigator>
  );
}
