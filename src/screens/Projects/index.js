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
    TextButton,
    ContainerEmpty,
    TextEmpty
} from './styles';

import backgroundImg from '../../assets/images/headerProjects.png';

import CardProjects from '../../components/CardProjects';
import firebase from '../../connections/firebaseConnection';

const Projects = (props) => {

    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const searchRegisters = () => {
        setLoading(true);
        let userId = firebase.auth().currentUser;
        firebase.database().ref('projects').child(userId.uid).once('value', snapshot => {
            const aux = [];
            snapshot.forEach(value => {
                aux.push(value.val());
            });
            setProjects(aux);
        });
        setLoading(false);
    };

    React.useEffect(() => {
        searchRegisters();
    }, []);

    const handleDetailProject = (project) => {
        props.navigation.navigate('DetailProject', {
            createdAt: project.createdAt,
            key: project.key,
            name: project.name
        });
    };

    const EmptyProject = () => (
        <ContainerEmpty>
            <TextEmpty>
                Nenhum projeto encontrado.
            </TextEmpty>
            <TextEmpty>
                Clique no botão abaixo para começar! :)
            </TextEmpty>
        </ContainerEmpty>
    );

    return (
        <>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <Container>
                <ImageView
                    source={backgroundImg}
                >
                    <Capa>
                        <Text>Seus projetos estão todos aqui!</Text>
                    </Capa>
                </ImageView>
                <ContainerFlatList>
                    <FlatList
                        refreshing={loading}
                        ListEmptyComponent={() => <EmptyProject />}
                        onRefresh={searchRegisters}
                        data={projects}
                        extraData={projects}
                        renderItem={({ item }) => {
                            return (
                                <CardProjects
                                    title={item.name}
                                    action={() => handleDetailProject(item)}
                                />
                            );
                        }}
                        keyExtrator={item => item.createdAt}
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