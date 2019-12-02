import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Alert} from 'react-native';

import firebase from '../../connections/firebaseConnection';

import {StatusBar, Container, Logotipo, Options, TextOptions} from './styles';
import Logo from '../../assets/images/logotipo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SingIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email === '' || password === ''){
            Alert.alert('Ops!', 'Preencha todos os campos.', [
                {text: 'OK', onPress: () => null}
            ]);
        }else{
            firebase.auth().signInWithEmailAndPassword(
                email, password
            ).catch(error => {
                Alert.alert('Erro', error.code, [
                    {text: 'OK', onPress: () => null}
                ]);
            });
        }
    }

    return (
        <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container>
            <Logotipo source={Logo} />
            <Input value={email} changeText={text => setEmail(text)} colorContainer="#000" nameIcon="user" sizeIcon={30} colorIcon="#666" colorInput="#666" />
            <Input value={password} changeText={text => setPassword(text)} colorContainer="#000" nameIcon="key" sizeIcon={30} colorIcon="#666" colorInput="#666" />
            <Button click={handleLogin} colorContainer="#f27e63" colorButton="#000" textButton="Entrar" />
            <Options onPress={() => props.navigation.navigate('Options')}>
                <TextOptions>Opções</TextOptions>
            </Options>
        </Container>
        </>
    );
};

export default SingIn;

/* <Icon name="swapright" color="#fff" size={20} /> */