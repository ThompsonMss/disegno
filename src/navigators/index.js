import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from '../connections/firebaseConnection';

import Splash from '../screens/Splash';
import SingIn from '../screens/SingIn';
import Options from '../screens/Options';
import Projects from '../screens/Projects';
import NewProject from '../screens/NewProject';

import RegisterOne from '../screens/Registers/RegisterOne';
import RegisterTwo from '../screens/Registers/RegisterTwo';
import RegisterTree from '../screens/Registers/RegisterTree';
import RegisterFour from '../screens/Registers/RegisterFour';

import Dash from '../navigators/Dash';

import Button from '../components/ButtonHeader';

export default createAppContainer(createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    SingIn: {
        screen: SingIn,
        navigationOptions: {
            header: null,
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Opções',
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: "#fff"
        }
    },
    RegisterOne: {
        screen: RegisterOne,
        navigationOptions: {
            header: null,
        }
    },
    RegisterTwo: {
        screen: RegisterTwo,
        navigationOptions: {
            header: null,
        }
    },
    RegisterTree: {
        screen: RegisterTree,
        navigationOptions: {
            header: null,
        }
    },
    RegisterFour: {
        screen: RegisterFour,
        navigationOptions: {
            header: null,
        }
    },
    Projects: {
        screen: Projects,
        navigationOptions: {
            title: 'Meus Projetos',
            headerStyle: {
                backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <Button
                    action={() => firebase.auth().signOut()}
                />
            ),
        }
    },
    NewProject: {
        screen: NewProject,
        navigationOptions: {
            header: null,
        }
    },
    Dash: {
        screen: Dash,
        navigationOptions: {
            header: null,
        }
    }
}));