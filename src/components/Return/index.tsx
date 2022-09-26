import React from 'react'
import { Container, Content, Title } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

type Props = { 
    title?: string;
}

export function Return ({title}: Props) {
    const navigation = useNavigation(); 
    return (
        <Container>
            <Icon 
                name="left"
                size={18}
                color="#000000"
                onPress={() => navigation.goBack()}
            />
            <Content>
            <Title>
                {title}
            </Title>
            </Content>

        </Container>
    )
}