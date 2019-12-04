import styled from 'styled-components/native';

export const CardView = styled.View`
    flex 1;
    width: 45%;
    height: 180;
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
    text-align: center;
`;

export const ContainerImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 10;
    margin-bottom: 10;
`;

export const Image = styled.Image`
    width: 50;
    height: 50;
    border-radius: 50;
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