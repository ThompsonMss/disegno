import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #161616;
`;

export const StatusBar = styled.StatusBar``;

export const ImageView = styled.ImageBackground`
    width: 100%;
    height: 120;
    background: #161616;
`;

export const Capa = styled.View`
    width: 100%;
    height: 200;
    background: rgba(0,0,0,0.8);
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 10;
    padding-right: 10;
`;

export const Text = styled.Text`
    font-size: 18;
    text-align: center;
    color: #eee;
`;

export const ContainerFlatList = styled.View`
    width: 100%;
    flex: 1;
    background: transparent;
`;

export const FlatList = styled.FlatList`
    width: 100%;
    background: transparent;
`;

export const ContainerActions = styled.View`
    position: absolute;
    bottom: 0;
    right: 0;
    flex: 1;
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 10;
    padding-right: 10;
    margin-top: 10;
    margin-bottom: 10;
    margin-left: 10;
    margin-right: 10;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
`

export const ButtonNewProject = styled.TouchableOpacity`
    width: 60;
    height: 60;
    border-radius: 50;
    elevation: 2;
    justify-content: center;
    align-items: center;
    background: #f27e63;
`;

export const TextButton = styled.Text`
    font-size: 20;
    color: #fff;
`;