import React from 'react'
import { Container, Title } from './styles'

type Props = {
    title?: string;
    width?: number;
    marginTop?: number;
    onPress?: () => void;
    outLine?: boolean;
};

export function Button ({width, title, outLine, marginTop, onPress }: Props) {
    return (

    <Container 
        width={width} 
        outLine={outLine}
        marginTop={marginTop} 
        onPress={onPress}
    >
        <Title outLine={outLine}>{title}</Title>
    </Container>
    )
}