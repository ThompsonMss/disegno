import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #161616;
`;

export const StatusBar = styled.StatusBar``;

export const Logotipo = styled.Image`
    width: 150;
    height: 150;
`;

export const Options = styled.TouchableOpacity`
    height: 45;
    width: 90%;
    margin-top: 10;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const TextOptions = styled.Text`
    font-size: 20;
    color: #fff;
    margin-right: 10;
`;