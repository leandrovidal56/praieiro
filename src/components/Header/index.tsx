import React from 'react';
import { Container, Title, SubTitle, Content } from './styles';

export  default function Header() {
    return (
        <Container> 
            <Content>
                <Title>PraieiroApp</Title>
                <SubTitle>Vendedor</SubTitle>
            </Content>
        </Container>
    );
}