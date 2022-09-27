import React from 'react'

import Icon from 'react-native-vector-icons/Entypo';

import  Button  from '@components/Button'
import  Input  from '@components/Input'
import  Label  from '@components/Label'
import  Return  from '@components/Return'
import  Menu  from '@components/Menu'

import { All, Container, Email, Header, LineEmail } from './styles'

export function Profile ({navigation}: any) {
    return (
        <All>

            <Container>
                <Return
                    title="PERFIL"
                    />
                <Header>Fulano Junior</Header>

                <LineEmail>
                    <Icon 
                        name="star"
                        size={18}
                        color="#F2C346"
                        />

                    <Email>3,6 - usuario@gmail.com</Email>
                </LineEmail>

                <Input text='ZÉ DO PASTEL'/>
                <Input 
                    text='(81) 91234 -5678'
                    marginBottom={1}
                />

                <Button
                    title='ATUALIZAR'
                    marginTop={0}
                />

                <Button 
                    title='REDEFINIR SENHA' 
                    outLine
                    marginTop={94}
                    onPress={() => navigation.navigate('ChangePassword')}    
                />

                <Label
                    title="Enviaremos um e-mail para fazer a redefinição de sua senha. Se não encontrar na sua caixa de entrada, procure também na sua caixa de spam."
                />

            </Container>

            <Menu/>
            
        </All>
    )

}