import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Home from '../screens/Home';

export default createAppContainer(createDrawerNavigator({
    Home: {
        screen: Home
    }
}));