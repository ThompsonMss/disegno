import React from 'react';
import {
    Container,
    Header,
    Title,
    ContainerProcess,
    ButtonProcess,
    TextButton

} from './styles';

import CardProcess from '../../components/CardProcess';

const DetailProject = (props) => {

    const process = [
        { id: 1, name: 'Inicial' },
        { id: 2, name: 'Development' },
        { id: 3, name: 'Concluido' },
    ];

    const key = props.navigation.getParam('key');
    const name = props.navigation.getParam('name');

    return (
        <Container>
            <Header>
                <Title size={30} color="#f27e63">
                    {name}
                </Title>
                <Title size={20} color="#999">
                    Seus Processos
                </Title>
            </Header>
            <ContainerProcess
                horizontal={true}
            >
                <CardProcess></CardProcess>
            </ContainerProcess>
            <ButtonProcess>
                <TextButton>Criar Processo</TextButton>
            </ButtonProcess>
        </Container>
    );
};

export default DetailProject;