import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { Container, IconView, InputView } from './styles';

const Input = (props) => {

    return (
        <Container color={props.colorContainer}>
            <IconView>
                <Icon name={props.nameIcon} size={props.sizeIcon} color={props.colorIcon} />
            </IconView>
            <InputView colorInput={props.colorInput} value={props.value} onChangeText={props.changeText} />
        </Container>
    );
};

export default Input;