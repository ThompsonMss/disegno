import React from 'react';

import {StatusBar, Container, Text, StepsContainer, Image, Button, TextButton} from './styles';

import ResetActions from '../../../utils/ResetActions';

import Logo from '../../../assets/images/good_team.png'

const RegisterFour = (props) => {
    return(
        <>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Container>
            <Text>Uhull! Agora você faz parte do nosso time. Começe a criar seus projetos.</Text>
            <StepsContainer>
                <Image source={Logo} />
            </StepsContainer>
            
            <Button onPress={() => props.navigation.dispatch(ResetActions('SingIn'))}>
                <TextButton>Entrar</TextButton>
            </Button>
        </Container>
        </>
    );
}

export default RegisterFour;