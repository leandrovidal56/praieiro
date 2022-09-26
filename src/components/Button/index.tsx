import React from 'react'
import { Container, ChangeScreen, Title } from './styles'
import { useNavigation } from '@react-navigation/native';

type Props = {
    width?: number;
    title: string;
    border?: string;
    colorText?: string;
    background?: string;
    marginTop?: number;
    onPress?: () => void;
};

export function Button ({width, title, border, colorText, background, marginTop, onPress }: Props) {
    return (
    <ChangeScreen onPress={onPress}>

    <Container width={width} background= {background} borderColor={border} marginTop={marginTop}>
            <Title color={colorText}>{title}</Title>
    </Container>
    </ChangeScreen>
    )
}