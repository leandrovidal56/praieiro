import { Return } from '@components/Return'
import React from 'react'
import { All, Container, Content, Description, Picture, ProductName, Star, SubTitle, Title } from './styles'
import Icon from 'react-native-vector-icons/Entypo';
import { Button } from '@components/Button';
import { ItemProduct } from '@components/ItemProduct';
import { Menu } from '@components/Menu';

export function Products ({navigation}: any) {
    return (
        <All>
            <Container>
                <Return title="PRODUTOS"  />
                <Content>
                    <Picture/>
                    <Description>
                        <Title>Zé do Pastel</Title>
                        <Star>
                            <Icon 
                            name="star"
                            size={18}
                            color="#F2C346"
                            />
                            <SubTitle>5,0 - Lanches</SubTitle>
                        </Star>
                    </Description>
                </Content>
                <Button 
                title='CADASTRAR'
                onPress={() => navigation.navigate('RegisterNewProduct')}    
                />
                <ItemProduct
                    title='Pastel de Queijo'
                    />
                <ItemProduct
                    title='Coxinha'
                    />
                
            </Container>
            <Menu/>
        </All>
    )
}