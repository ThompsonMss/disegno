import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DetailProject from '../screens/DetailProject';

import CustonDrawer from '../components/CustonDrawer';

export default createAppContainer(createDrawerNavigator({
    DetailProject: {
        screen: DetailProject,
    }
}, {
    drawerBackgroundColor: '#000',
    drawerType: 'slide',
    drawerWidth: 80,
    contentComponent: (props) => <CustonDrawer {...props} />
}));