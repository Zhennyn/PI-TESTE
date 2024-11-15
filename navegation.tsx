import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Estudos from './Telas/estudos';
import MultiSrc from './Telas/multi_scr';

const mainNavigation = createSwitchNavigator({
  Estudos,
  MultiSrc,
});

export default createAppContainer(mainNavigation);