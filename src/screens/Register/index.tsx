import React from 'react';

import Input from '@components/Input';
import Button from '@components/Button';
import Return from '@components/Return';

import { Container} from './styles';


export function Register ({navigation}: any) {
    return (
        <Container>
            <Return 
                title='CADASTRAR'
            />

            <Input title='NOME'/>
            <Input title='NOME FANTASIA'/>
            <Input title='TELEFONE'/>
            <Input title='E-MAIL'/>
            <Input title='SENHA'/>

            <Button 
                title='REGISTRAR'
                onPress={() => navigation.navigate('Products')}
            />        
            
        </Container>
    )
}