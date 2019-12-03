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

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 10;
    padding-left: 10;
    margin-bottom: 10; 
`;

export const Name = styled.Text`
    color: ${props => props.color};
    font-size: ${props => props.size};
    text-align: center;
    margin-bottom: 10;
`;

export const NewTasks = styled.TouchableOpacity`
    border-radius: 50;
    width: 30;
    height: 30;
    background: #999;
`;

export const Content = styled.ScrollView`
    background: transparent;
    flex: 1;
`;

export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10;
    margin-top: 10;
`;

export const InputTasks = styled.TextInput`
    flex: 1;
    height: 40;
    border-bottom-width: 1;
    border-color: #f27e63;
    font-size: 15;
    color: #999;
    margin-right: 10;
`;

export const ButtonTasks = styled.TouchableOpacity`
    height: 40;
    background: transparent;
    align-items: center;
    justify-content: center;
    padding-left: 5;
    padding-right: 5;
`;

export const TextButton = styled.Text`
    color: #eee;
    font-size: 18;
`;

//FlatList

export const ContainerCard = styled.FlatList`
    flex: 1;
`;

export const CardFature = styled.View`
    width: 100%;
    height: 40;
    background: #161616;
    border-radius: 5;
    padding-top: 5;
    padding-left: 5;
    padding-right: 5;
    padding-bottom: 5;
    margin-bottom: 10;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Desc = styled.Text`
    color: #eee;
    font-size: 15;
`;

export const Action = styled.TouchableOpacity``;

export const TextAction = styled.Text``;
