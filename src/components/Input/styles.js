import styled from 'styled-components/native';

export const Container = styled.View`
  border: none;
  width: 90%;
  background-color: ${props => props.color};
  margin-top: 10;
  border-radius: 5;
  flex-direction: row;
  align-items: center;
  padding-left: 5;
  padding-right: 5;
`;

export const IconView = styled.Text`
  text-align: center;
`;

export const InputView = styled.TextInput`
  border: none;
  flex: 1;
  background-color: transparent;
  border-radius: 5;
  font-size: 20;
  color: ${props => props.colorInput};
`;
