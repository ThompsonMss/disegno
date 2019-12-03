import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DetailProject from '../screens/DetailProject';

export default createAppContainer(createDrawerNavigator({
    DetailProject: {
        screen: DetailProject,
    }
}, {
    drawerBackgroundColor: '#000',
    drawerType: 'slide',
    drawerWidth: 80,
    contentOptions: {
        activeTintColor: '#999',
        activeBackgroundColor: '#161616',
        itemStyle: {
            height: 100
        }
    }
}));