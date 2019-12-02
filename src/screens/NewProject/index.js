import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Text, StepsContainer, Step, StepText, TextForm, InputForm, Options, TextOptions } from './styles';

const NewProject = (props) => {

    const [name, setName] = useState('');

    const handleRegister = () => {
        if (name === '') {
            Alert.alert('Opa!', 'Precisamos do seu nome.', [
                { text: 'OK', onPress: () => null }
            ]);
        } else {
            props.navigation.navigate('RegisterTwo', { name })
        }
    };

    return (
        <Container>
            <Text>Boa! Você está perto de começar teus projetos topzera!</Text>
            <StepsContainer>
                <Step color="#ff0">
                    <StepText color="#ff0">1º</StepText>
                </Step>
                <Step color="#999">
                    <StepText color="#999">2º</StepText>
                </Step>
                <Step color="#999">
                    <StepText color="#999">3º</StepText>
                </Step>
            </StepsContainer>
            <TextForm>Qual é seu nome?</TextForm>
            <InputForm value={name} onChangeText={text => setName(text)} />
            <Options onPress={handleRegister}>
                <TextOptions>Avante</TextOptions>
            </Options>
        </Container>
    );
}

export default NewProject;