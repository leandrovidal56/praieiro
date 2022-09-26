import React from 'react';
import { Container, Text, Title } from './styles';

 type Props = {
    inputLarge?: string;
    title?: string;
    text?: string;
    marginBottom?: number;
};

export function Input ({inputLarge, title, text, marginBottom}: Props) {
    return (
        <Container inputLarge={inputLarge} marginBottom={marginBottom}>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Container>
    )
}