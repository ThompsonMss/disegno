import React from 'react';
import { Button, Text } from './styles';

export default function (props) {
    return (
        <Button onPress={props.action}>
            <Text>Tchau</Text>
        </Button>
    );
};