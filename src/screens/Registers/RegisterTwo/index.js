import React, {useState} from 'react';
import {Alert} from 'react-native';

import {Container, Text, StepsContainer, Step, StepText, TextForm, InputForm, Options, TextOptions} from './styles';

const RegisterTwo = (props) => {

    let name = props.navigation.getParam('name');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        if(email === ''){
            Alert.alert('Opa!', 'Precisamos do seu email, prometo que não vamos encher seu email com propagandas.', [
                {text: 'OK', onPress: () => null}
            ]);
        }else{
            props.navigation.navigate('RegisterTree', {name, email})
        }
    }

    return(
        <Container>
            <Text>Bem vindo {name}! Eu já estou ansioso por tudo que você pode criar.</Text>
            <StepsContainer>
                <Step color="#ff0">
                    <StepText color="#ff0">1º</StepText>
                </Step>
                <Step color="#ff0">
                    <StepText color="#ff0">2º</StepText>
                </Step>
                <Step color="#999">
                    <StepText color="#999">3º</StepText>
                </Step>
            </StepsContainer>
            <TextForm>Aquele email que você usa todos os dias! Qual é?</TextForm>
            <InputForm value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" />
            <Options onPress={handleRegister}>
                <TextOptions>Seguindo</TextOptions>
            </Options>
        </Container>
    );
}

export default RegisterTwo;