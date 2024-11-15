import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './Routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

export default App;
