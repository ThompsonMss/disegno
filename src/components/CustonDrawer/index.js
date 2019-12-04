import React from 'react';
import {
    Scroll,
    SafeArea,
    Logo,
    FlatList,
    ButtonLogout,
    TextButton,
    ButtonProject,
    ImageProject,
    NameProject
} from './styles';
import logotipo from '../../assets/images/logotipo.png';

import firebase from '../../connections/firebaseConnection';

export default function CustonDrawer(props) {

    //Recuperando Projetos
    const [projects, setProjects] = React.useState([]);
    const getProjects = () => {
        let userId = firebase.auth().currentUser;
        firebase.database().ref('projects').child(userId.uid).once('value', snapshot => {
            const aux = [];
            snapshot.forEach(value => {
                aux.push(value.val());
            });
            setProjects(aux);
        });
    };

    const handleDetailProject = (project) => {
        props.navigation.navigate('DetailProject', {
            createdAt: project.createdAt,
            key: project.key,
            name: project.name
        });
    };

    React.useEffect(() => {
        getProjects();
    }, []);

    return (
        <Scroll>
            <SafeArea>
                <Logo
                    source={logotipo}
                />
            </SafeArea>
            <FlatList
                data={projects}
                renderItem={({ item }) => (
                    <ButtonProject
                        onPress={() => handleDetailProject(item)}
                    >
                        <ImageProject
                            source={{ uri: `https://api.adorable.io/avatars/285/${item.key}.png` }}
                        />
                        <NameProject>
                            {item.name}
                        </NameProject>
                    </ButtonProject>
                )}
            />
            <ButtonLogout
                onPress={() => firebase.auth().signOut()}
            >
                <TextButton>Logout</TextButton>
            </ButtonLogout>
        </Scroll>
    );
}
