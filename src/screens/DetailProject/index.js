import React from 'react';
import {Modal, View, Text, TouchableHighlight, Alert} from 'react-native';
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
    ButtonModal

} from './styles';

import CardProcess from '../../components/CardProcess';

import firebase from '../../connections/firebaseConnection';

const DetailProject = (props) => {

    const [modalVisible, setModalVisible] = React.useState(false); 
    const [nameProcess, setNameProcess] = React.useState('');

    const process = [
        { id: 1, name: 'Inicial' },
        { id: 2, name: 'Development' },
        { id: 3, name: 'Concluido' },
    ];

    const key = props.navigation.getParam('key');
    const name = props.navigation.getParam('name');


    const handleNewProcess = () => {
        if(nameProcess === ''){
            Alert.alert('Opa', 'Insira um nome para o processo', [
                {text: 'OK', onPress: () => null}
            ]);
        }else{
            let userId = firebase.auth().currentUser;
            let refProcess = firebase.database().ref('projects').child(userId).child(key).child('process').push();
            let keyProcess = refProcess.key;
            refProcess.set({
                key: keyProcess,
                name: nameProcess,
            });
        }
    };

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
            <ButtonProcess onPress={() => setModalVisible(true)} >
                <TextButton>Criar Processo</TextButton>
            </ButtonProcess>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            
            >
                <ContainerModal style={{marginTop: 22, height: 300}}>
                    <ContentModal>
                        <TextForm>Qual nome do processo?</TextForm>
                        <InputForm value={nameProcess} onChangeText={txt => setNameProcess(txt)}  />

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