import React, {useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';

import firebase from '../../../connections/firebaseConnection';

import {Container, Text, StepsContainer, Step, StepText, TextForm, InputForm, Options, TextOptions} from './styles';
import ResetActions from '../../../utils/ResetActions';

const RegisterTree = (props) => {

    const [stateButton, setStateButton] = useState(true);

    let name = props.navigation.getParam('name');
    let email = props.navigation.getParam('email');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if(password === ''){
            Alert.alert('Opa!', 'Insira uma senha, será sua chave segura.', [
                {text: 'OK', onPress: () => null}
            ]);
        }else{
            setStateButton(false);
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async () => {
                let userId = firebase.auth().currentUser;

                await firebase.database().ref('users').push().set({
                    user: userId.uid,
                    name: name
                });

                props.navigation.dispatch(ResetActions('RegisterFour'));
            })
            .catch(error => {
                setStateButton(true);
                Alert.alert('Oh não! Algum problema aconteceu.', error.code, [
                    {text: 'OK', onPress: () => null}
                ]);
            });
        }
    }

    return(
        <Container>
            <Text>Puxa Vida! Nossa equipe está honrando por ter você com a gente!</Text>
            <StepsContainer>
                <Step color="#ff0">
                    <StepText color="#ff0">1º</StepText>
                </Step>
                <Step color="#ff0">
                    <StepText color="#ff0">2º</StepText>
                </Step>
                <Step color="#ff0">
                    <StepText color="#ff0">3º</StepText>
                </Step>
            </StepsContainer>
            <TextForm>Agora coloque uma super senha secreta, blz?</TextForm>
            <InputForm secureTextEntry={true} keyboardType="numeric" value={password} onChangeText={text => setPassword(text)} />
            <Options onPress={handleRegister}>
                {
                    stateButton === true 
                    ? (<TextOptions>Finalizar</TextOptions>) 
                    : (<ActivityIndicator size="small" color="#f27e63" />)
                }
            </Options>
        </Container>
    );
}

export default RegisterTree;