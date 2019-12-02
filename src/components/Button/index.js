import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, ButtonView, TextView} from './styles';

const Button = (props) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [stateButton, setStateButton] = useState(true);

    return (
        <Container color={props.colorContainer}>
            <ButtonView disabled={buttonDisabled} onPress={props.click}>
                {
                    stateButton === true 
                    ? (<TextView colorButton={props.colorButton}>{props.textButton}</TextView>) 
                    : (<ActivityIndicator size="small" color="#000" />)
                }
            </ButtonView>
        </Container>
    );
};

export default Button;