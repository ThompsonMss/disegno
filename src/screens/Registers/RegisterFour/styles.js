import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background: #161616;
`;

export const StatusBar = styled.StatusBar``;

export const Text = styled.Text`
    padding-left: 50;
    padding-right: 50;
    text-align: center;
    font-size: 20;
    color: #666;
    margin-top: 50;
`;

export const StepsContainer = styled.View`
    height: 120;
    margin-top: 70;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 300;
    height: 200;
`;

export const Button = styled.TouchableOpacity`
    height: 45;
    width: 90%;
    margin-top: 100;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 20;
    color: #f27e63;
    margin-right: 10;
`;
