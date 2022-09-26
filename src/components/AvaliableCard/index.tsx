import React from 'react';
import { Container, Content, Date, Description, Note, Name, Picture, User, LineNote } from './styles';
import Icon from 'react-native-vector-icons/Entypo';

type Props = {
    date: string;
    name: string;
    note?: number;
}

export function AvaliableCard ({date, name, note}: Props) {
    return (
        <Container>
            <Date>{date}</Date>
            <Content>
                <User>
                    <Picture/>
                    <Description>
                        <Name>{name}</Name> 
              
                            <LineNote>
                                <Note>{note ? 'Avaliado -' : 'Cancelado'} </Note>
                                <Note>{note ?  <Icon 
                                name="star"
                                size={14}
                                color="#F2C346"
                                /> : ''} </Note>
                                <Note>{note ? note : ''} </Note>
                            </LineNote>
                    </Description>
                </User>
            </Content>
        </Container>
    )
}