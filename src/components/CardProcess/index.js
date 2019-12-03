import React from 'react';
import { Alert } from 'react-native';
import {
    Container,
    ContainerHeader,
    Name,
    NewTasks,
    Content,
    ContainerInput,
    InputTasks,
    ButtonTasks,
    TextButton,
    CardFature,
    Desc,
    Action,
    TextAction,
    ContainerCard,
    ContainerEmpty,
    TextEmpty
} from './styles';

import firebase from '../../connections/firebaseConnection';

export default function CardProcess(props) {

    const [inputVisible, setInputVisible] = React.useState(false);
    const [valueInput, setValueInput] = React.useState('');

    //Recuperando Chaves
    const keyProcess = props.keyProcess;
    const keyProject = props.keyProject;

    //Salvando Tarefa no Processo
    const handleNewTasks = () => {
        if (valueInput == '') {
            Alert.alert('Opa', 'Preencha o campo tarefa', [
                { text: 'OK', onPress: () => null }
            ]);
        } else {
            const userId = firebase.auth().currentUser;
            let refTasks = firebase.database().ref('projects').child(userId.uid).child(keyProject).child('process').child(keyProcess)
                .child('tasks').push();
            let keyTasks = refTasks.key;
            refTasks.set({
                key: keyTasks,
                desc: valueInput
            });

            Alert.alert('Sucesso', `Tarefa iniciada em ${props.name}`, [
                { text: 'OK', onPress: () => null }
            ]);

            setValueInput('');
            setInputVisible(false);
            getTasks();
        }
    }

    //Recuperando Tarefas

    const [listTasks, setListTasks] = React.useState([]);
    const getTasks = async () => {
        const userId = firebase.auth().currentUser;
        const arrTasks = [];
        await firebase.database().ref('projects').child(userId.uid).child(keyProject).child('process')
            .child(keyProcess)
            .child('tasks').once('value', snapshot => {
                snapshot.forEach(value => {
                    arrTasks.push({ key: value.val().key, desc: value.val().desc });
                });
            });

        setListTasks(arrTasks);
    }

    React.useEffect(() => {
        getTasks();
    }, []);

    const EmptyTaks = () => (
        <ContainerEmpty>
            <TextEmpty>
                Nenhuma tarefa encontrada.
            </TextEmpty>
        </ContainerEmpty>
    );

    return (
        <Container>
            <ContainerHeader>
                <Name color="#eee" size={20}>
                    {props.name}
                </Name>
                <NewTasks onPress={() => setInputVisible(!inputVisible)}>
                    <Name color="#eee" size={20}>+</Name>
                </NewTasks>
            </ContainerHeader>
            <Content>
                {inputVisible == true && (
                    <ContainerInput>
                        <InputTasks
                            placeholder="Nova Tarefa"
                            placeholderTextColor="#eee"
                            value={valueInput}
                            onChangeText={text => setValueInput(text)}
                        />
                        <ButtonTasks onPress={handleNewTasks}>
                            <TextButton>OK</TextButton>
                        </ButtonTasks>
                    </ContainerInput>
                )}
                <ContainerCard
                    ListEmptyComponent={() => <EmptyTaks />}
                    data={listTasks}
                    renderItem={({ item }) => (
                        <CardFature>
                            <Desc>{item.desc}</Desc>
                            <Action>
                                <TextAction>x</TextAction>
                            </Action>
                        </CardFature>
                    )}
                    keyExtractor={item => item.key}
                />
            </Content>
        </Container>
    );
}
