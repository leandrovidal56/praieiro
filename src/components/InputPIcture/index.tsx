import React from 'react';
import { Container, Text } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function InputPicture  ()  {
    return (
        <Container >
             <Icon 
                name="cloud-upload"
                size={24}
                color="#000"
            />
            <Text>SELECIONAR FOTO</Text>
        </Container>
    )
}
