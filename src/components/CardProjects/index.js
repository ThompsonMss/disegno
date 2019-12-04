import React from 'react';
import { CardView, Text, ContainerImage, Image, Button, TextButton } from './styles';

const CardProjects = (props) => {

    const uriAvatar = `https://api.adorable.io/avatars/285/${props.avatar}.png`;

    return (
        <CardView
        >
            <Text>{props.title}</Text>
            <ContainerImage>
                <Image
                    source={{ uri: uriAvatar }}
                />
            </ContainerImage>
            <Button
                onPress={props.action}
            >
                <TextButton>Visualizar</TextButton>
            </Button>
        </CardView>
    );
}

export default CardProjects;