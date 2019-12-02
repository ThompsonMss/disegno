import styled from 'styled-components/native';

export const Container = styled.View`
    border: none;
    width: 90%;
    height: 45;
    background-color: ${props => props.color};
    margin-top: 10;
    border-radius: 5;
    flex-direction: row;
    align-items: center;
    padding-left: 5;
    padding-right: 5;
`;

export const ButtonView = styled.TouchableOpacity`
    border: none;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

export const TextView = styled.Text`
    font-size: 20;
    color: ${props => props.colorButton};
`;