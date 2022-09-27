import { Button } from '@components/Button';
import React from 'react';
import { ButtonRow, Container, Content, Date, Description, Distance, Name, Picture, User } from './styles';

type Props = {
    date: string;
    name: string;
    distance: string;
}

export function RequestCard ({date, name, distance}: Props) {
    return (
        <Container>
            <Date>{date}</Date>
            <Content>

                <User>
                    <Picture/>
                    <Description>
                        <Name>{name}</Name>
                        <Distance>{distance}</Distance>
                    </Description>
                </User>

                <ButtonRow>
                    <Button width={40} title='ATENDER' />
                    <Button 
                        width={40}
                        title='RECUSAR' 
                        outLine
                    />
                </ButtonRow>

            </Content>
        </Container>
    )
}