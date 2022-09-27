import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Label } from '@components/Label'
import { Return } from '@components/Return'
import React from 'react'
import { Container } from './styles'

export function ChangePassword ({navigation}: any) {
    return (
        <Container>
            <Return
                title="REDEFINIR SENHA"
                />
            <Input 
                title='E-MAIL'
                />
            <Button
                title='REDEFINIR'
                onPress={() => navigation.goBack()}
            />
            <Label
                title="Enviaremos um e-mail para fazer a redefinição de sua senha. Se não encontrar na sua caixa de entrada, procure também na sua caixa de spam."
            />
        </Container>
    )

}