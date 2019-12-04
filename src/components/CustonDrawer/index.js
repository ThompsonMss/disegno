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

const arr = [{ id: 1 }, { id: 2 }];

export default function CustonDrawer() {

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

    React.useEffect(() => {
        getProjects();
        console.tron.log('Lista', projects);
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
                    <ButtonProject>
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
