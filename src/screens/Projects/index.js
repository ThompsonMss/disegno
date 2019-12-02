import React from 'react';
import {
    StatusBar,
    Container,
    ImageView,
    Capa,
    Text,
    ContainerFlatList,
    FlatList,
    ContainerActions,
    ButtonNewProject,
    ButtonLogout,
    TextButton
} from './styles';

import backgroundImg from '../../assets/images/headerProjects.png';

import CardProjects from '../../components/CardProjects';

const message = [
    'Crie suas próprias metodologias',
    'Seus projetos organizados de forma eficiente',
    'Tire seu projeto do papel e coloque aqui de forma alinhada'
];

const projects = [
    { id: 1, title: 'App Teste', status: 'Em andamento' },
    { id: 2, title: 'Site Ambev', status: 'Em andamento' },
    { id: 3, title: 'Modulo Financeiro', status: 'Pausado' },
];

const Projects = (props) => {
    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Container>
                <ImageView
                    source={backgroundImg}
                >
                    <Capa>
                        <Text>Crie suas próprias metodologias</Text>
                    </Capa>
                </ImageView>
                <ContainerFlatList>
                    <FlatList
                        data={projects}
                        renderItem={({ item }) => {
                            return (
                                <CardProjects
                                    title={item.title}
                                    action={() => alert('Projeto X')}
                                />
                            );
                        }}
                        keyExtrator={item => item.id}
                        horizontal={false}
                        numColumns={2}
                    />
                </ContainerFlatList>
                <ContainerActions>
                    <ButtonNewProject
                        onPress={() => props.navigation.navigate('NewProject')}
                    >
                        <TextButton>+</TextButton>
                    </ButtonNewProject>
                </ContainerActions>
            </Container>
        </>
    );
};

export default Projects;