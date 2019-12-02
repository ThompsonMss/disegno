import React from 'react';

import firebase from '../../connections/firebaseConnection';

import { StatusBar, Container, Logotipo, Text } from './styles';
import Logo from '../../assets/images/logotipo.png';

import ResetAction from '../../utils/ResetActions';

const Splash = (props) => {

    const [loading, setLoading] = React.useState('');

    setTimeout(() => {
        setLoading('Verificando alguns dados...');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.navigation.dispatch(ResetAction('Projects'));
            } else {
                props.navigation.dispatch(ResetAction('SingIn'));
            }
        });
    }, 1500);

    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Container>
                <Logotipo source={Logo} />
                <Text>{loading}</Text>
            </Container>
        </>
    );
};

export default Splash;