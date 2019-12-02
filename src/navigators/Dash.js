import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DetailProject from '../screens/DetailProject';

export default createAppContainer(createDrawerNavigator({
    DetailProject: {
        screen: DetailProject
    }
}));