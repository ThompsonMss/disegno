import styled from 'styled-components/native';

export const CardView = styled.View`
    flex 1;
    width: 45%;
    height: 130;
    background: #222;
    border-radius: 5;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 10;
    margin-left: 10;
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 10;
    padding-right: 10;
    justify-content: space-between;
`;

export const Text = styled.Text`
    color: #999;
    font-size: 18;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 30;
    background: #161616;
    border-radius: 5;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #eee;
`;