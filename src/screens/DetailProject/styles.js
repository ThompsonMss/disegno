import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #161616;
    padding-top: 10;
    padding-bottom: 10;
    padding-right: 10;
    padding-left: 10;
`;

export const Header = styled.View`
    width: 100%;
    height: 60;
    justify-content: center;
    margin-bottom: 20;
`;

export const Title = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size};
`;

export const ContainerProcess = styled.ScrollView`
    flex: 3;
`;

export const ButtonProcess = styled.TouchableOpacity`
    width: 100%;
    height: 40;
    margin-top: 20;
    background: #f27e63;
    border-radius: 5;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #161616;
    font-size: 20;
`;

//Modal -

export const ContainerModal = styled.View`
    background: #333;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

export const ContentModal = styled.View``;

export const TextModal = styled.Text`
    color: #f27e63;
    font-size: 20;
`;

export const ButtonModal = styled.TouchableOpacity`
    height: 60;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20;
`;

export const TextForm = styled.Text`
    padding-left: 50;
    padding-right: 50;
    text-align: left;
    font-size: 20;
    color: #999;
    margin-top: 50;
    margin-bottom: 10;
`;

export const InputForm = styled.TextInput`
    margin-left: 50;
    margin-right: 50;
    height: 45;
    border-bottom-width: 1;
    border-color: #f27e63;
    font-size: 20;
    color: #999;
`;