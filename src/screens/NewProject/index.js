import React, { useState } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Container, Text, TextForm, InputForm, Options, TextOptions } from './styles';

import firebase from '../../connections/firebaseConnection';

const NewProject = (props) => {

    const [stateButton, setStateButton] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        if (name === '') {
            Alert.alert('Opa!', 'Precisamos do nome do projeto', [
                { text: 'OK', onPress: () => null }
            ]);
        } else {
            if (email == '') {
                setStateButton(false);
                let userId = firebase.auth().currentUser;

                firebase.database().ref('projects').child(userId.uid).push().set({
                    name: name,
                    createdAt: new Date().getTime()
                });

                setStateButton(true);
                Alert.alert('Sucesso!', 'Seu projeto já foi criando!', [
                    { text: 'OK', onPress: () => null }
                ]);
                setName('');
                setEmail('');
            } else {
                setStateButton(false);
                let userId = firebase.auth().currentUser;

                firebase.database().ref('projects').child(userId.uid).push().set({
                    name: name,
                    collaborator: email,
                    createdAt: new Date().getTime()
                });

                setStateButton(true);
                Alert.alert('Sucesso!', 'Seu projeto já foi criando!', [
                    { text: 'OK', onPress: () => null }
                ]);
                setName('');
                setEmail('');
            }
        }
    };

    return (
        <Container>
            <Text>Criando nosso projeto fera!</Text>
            <TextForm>Qual nome do seu projeto?</TextForm>
            <InputForm value={name} onChangeText={text => setName(text)} />
            <TextForm>Você pode adicionar colaborador no seu projeto. Qual email dele?</TextForm>
            <InputForm value={email} onChangeText={text => setEmail(text)} />
            <Options onPress={handleRegister}>
                {
                    stateButton === true
                        ? (<TextOptions>Criando</TextOptions>)
                        : (<ActivityIndicator size="small" color="#f27e63" />)
                }
            </Options>
        </Container>
    );
}

export default NewProject;