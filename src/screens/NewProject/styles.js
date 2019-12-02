import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background: #161616;
`;

export const Text = styled.Text`
    padding-left: 50;
    padding-right: 50;
    text-align: center;
    font-size: 20;
    color: #666;
    margin-top: 50;
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
    color: #f27e63;
    margin-right: 10;
`;
