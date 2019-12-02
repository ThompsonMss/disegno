import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '../screens/Splash';

import Main from '../navigators/Main';

export default createAppContainer(createSwitchNavigator({
    Splash: {
        screen: Splash,
    },
    Main: {
        screen: Main,
    }
}));