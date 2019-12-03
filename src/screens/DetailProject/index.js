import React from 'react';
import { Modal, View, Text, TouchableHighlight, Alert, FlatList } from 'react-native';
import {
    Container,
    Header,
    Title,
    ContainerProcess,
    ButtonProcess,
    TextButton,
    ContainerModal,
    ContentModal,
    TextForm,
    InputForm,
    TextModal,
    ButtonModal,
    ContainerEmpty,
    TextEmpty

} from './styles';

import CardProcess from '../../components/CardProcess';

import firebase from '../../connections/firebaseConnection';

const DetailProject = (props) => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [nameProcess, setNameProcess] = React.useState('');
    const [haveProcess, setHaveProcess] = React.useState(true);

    const key = props.navigation.getParam('key');
    const name = props.navigation.getParam('name');


    const handleNewProcess = () => {
        if (nameProcess === '') {
            Alert.alert('Opa', 'Insira um nome para o processo', [
                { text: 'OK', onPress: () => null }
            ]);
        } else {
            let userId = firebase.auth().currentUser;
            let refProcess = firebase.database().ref('projects').child(userId.uid).child(key).child('process').push();
            let keyProcess = refProcess.key;
            refProcess.set({
                key: keyProcess,
                name: nameProcess,
            });
            Alert.alert('Sucesso', 'Processo Salvo', [
                { text: 'OK', onPress: () => null }
            ]);
            setModalVisible(false);
            setNameProcess('');
            getProcess();
        }
    };

    const EmptyProcess = () => (
        <ContainerEmpty>
            <TextEmpty>
                Nenhum processo encontrado.
            </TextEmpty>
        </ContainerEmpty>
    );

    //Recuperando Processos

    const [listProcess, setListProcess] = React.useState([]);
    //let listProcess = [];

    let userId = firebase.auth().currentUser;
    const getProcess = async () => {
        const arrProcess = [];
        await firebase.database().ref('projects').child(userId.uid).child(key).child('process').once('value', snapshot => {
            snapshot.forEach(value => {
                arrProcess.push({ key: value.val().key, name: value.val().name });
            });
        });

        setListProcess(arrProcess);
    };

    React.useEffect(() => {
        getProcess();
    }, []);

    return (
        <Container>
            <Header>
                <Title size={30} color="#f27e63">
                    {name}
                </Title>
                <Title size={20} color="#999">
                    Seus processos
                </Title>
            </Header>
            <ContainerProcess
                horizontal={true}
                data={listProcess}
                renderItem={({ item }) => <Title color="#fff" size={30}>Entrou</Title>}
                keyExtractor={item => item.name}
                ListEmptyComponent={() => <EmptyProcess />}
            />
            <ButtonProcess onPress={() => setModalVisible(true)} >
                <TextButton>Criar Processo</TextButton>
            </ButtonProcess>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}

            >
                <ContainerModal style={{ marginTop: 22, height: 300 }}>
                    <ContentModal>
                        <TextForm>Qual nome do processo?</TextForm>
                        <InputForm value={nameProcess} onChangeText={txt => setNameProcess(txt)} />

                        <ButtonModal
                            onPress={handleNewProcess}
                        >
                            <TextModal>Salvar</TextModal>
                        </ButtonModal>
                    </ContentModal>
                </ContainerModal>
            </Modal>
        </Container>
    );
};

export default DetailProject;