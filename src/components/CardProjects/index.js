import React from 'react';
import { CardView, Text, Button, TextButton } from './styles';

const CardProjects = (props) => {
    return (
        <CardView
        >
            <Text>{props.title}</Text>
            <Button
                onPress={props.action}
            >
                <TextButton>Visualizar</TextButton>
            </Button>
        </CardView>
    );
}

export default CardProjects;