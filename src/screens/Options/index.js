import React from 'react';

import { Container, Content, Text } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Options = (props) => {

    const handleRegister = () => props.navigation.navigate('RegisterOne');

    return (
        <Container>
            <Content>
                <Text>E ai, topzera? Quer começar a criar seus projetos legais? O disegno oferece uma gestão baseado em processos, você e sua equipe conseguem se organizar e acompanhar todas as etapas do teu projeto.</Text>
                <Button click={handleRegister} colorContainer="#f27e63" colorButton="#000" textButton="Cadastrar" />
            </Content>
            <Content>
                <Text>Esqueceu a senha? Relaxa, insira seu email que você cadastrou no campo abaixo, e vamos te mandar uma nova senha.</Text>
                <Input colorContainer="#161616" nameIcon="user" sizeIcon={30} colorIcon="#666" colorInput="#666" />
                <Button colorContainer="#eee" colorButton="#000" textButton="Recuperar senha" />
            </Content>
        </Container>
    );
}

export default Options;