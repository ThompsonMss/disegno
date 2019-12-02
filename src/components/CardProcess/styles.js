import styled from 'styled-components/native';

export const Container = styled.View`
    width: 250;
    height: 100%;
    background: #222;
    border-radius: 5;
    padding-top: 10;
    padding-right: 10;
    padding-left: 10;
    padding-bottom: 10;
    margin-right: 20;
`;

export const Name = styled.Text`
    color: #eee;
    font-size: 20;
    text-align: center;
    margin-bottom: 10;
`;

export const Content = styled.ScrollView`
    background: transparent;
    flex: 1;
`;

export const CardFature = styled.View`
    width: 100%;
    height: 50;
    background: #999;
    padding-top: 5;
    padding-left: 5;
    padding-right: 5;
    padding-bottom: 5;
    margin-bottom: 10;
`;
