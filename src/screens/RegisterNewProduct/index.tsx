import { Input } from '@components/Input';
import React from 'react';
import { Button } from '@components/Button';
import { All, Container} from './styles';
import { Return } from '@components/Return';
import { InputPicture } from '@components/InputPIcture';
import { Picture } from '@components/Picture';
import { Menu } from '@components/Menu';


export function RegisterNewProduct ({navigation}: any) {
    return (
        <All>
            <Container>
                <Return 
                    title='CADASTRAR PRODUTO'
                />

                <Input title='CATEGORIA'/>
                <Input title='NOME'/>
                <Input inputHeight='101' title='DESCRIÇÃO'/>
                <Input title='VALOR'/>
                <InputPicture/>
                <Picture/>

                <Button 
                    title='SALVAR'
                    onPress={() => navigation.navigate('Products')}
                />     

            </Container>
            <Menu/>
        </All>
    )
}