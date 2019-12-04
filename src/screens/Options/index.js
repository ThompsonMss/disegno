import React from 'react';
import { Alert } from 'react-native';

import { Container, Content, Text } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import firebase from '../../connections/firebaseConnection';

const Options = (props) => {

    const [email, setEmail] = React.useState('');

    const handleRegister = () => props.navigation.navigate('RegisterOne');

    const handleResetPassword = () => {
        if (email == '') {
            Alert.alert('Opa', 'Preciso do seu email para te enviar uma senha nova.', [
                { text: 'OK', onPress: () => null }
            ]);
        } else {
            firebase.auth().sendPasswordResetEmail(email)
                .then(
                    Alert.alert('Suceso', 'Pronto já te enviamos um email para você redefinir a senha.', [
                        { text: 'OK', onPress: () => null }
                    ])
                )
                .catch(err => {
                    alert('Erro: ', err.code);
                });

            setEmail('');
        }
    };

    return (
        <Container>
            <Content>
                <Text>E ai, topzera? Quer começar a criar seus projetos legais? O disegno oferece uma gestão baseado em processos, você e sua equipe conseguem se organizar e acompanhar todas as etapas do teu projeto.</Text>
                <Button click={handleRegister} colorContainer="#f27e63" colorButton="#000" textButton="Cadastrar" />
            </Content>
            <Content>
                <Text>Esqueceu a senha? Relaxa, insira seu email que você cadastrou no campo abaixo, e vamos te mandar uma nova senha.</Text>
                <Input
                    value={email}
                    changeText={text => setEmail(text)}
                    colorContainer="#161616"
                    nameIcon="user"
                    sizeIcon={30}
                    colorIcon="#666"
                    colorInput="#666" />
                <Button click={handleResetPassword} colorContainer="#eee" colorButton="#000" textButton="Recuperar senha" />
            </Content>
        </Container>
    );
}

export default Options;