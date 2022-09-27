import { Button } from '@components/Button'
import { Return } from '@components/Return'
import React from 'react'
import { Acess, AcessBold,  Container,  Header, LineAcess, SubTitle } from './styles'

export function VerifyEmail () {
    return (
        <Container>
            <Return
                title="VERIFICAÇÃO DE E-MAIL"
            />

            <Header>Seu e-mail ainda não foi verificado</Header>

            <Acess>
                <Acess>Para continuar, confirme que tem acesso ao e-mail</Acess>
                <Acess> </Acess>
                <AcessBold>usuario@praieiro.com.br</AcessBold>
            </Acess>

            <SubTitle>
                Enviaremos um e-mail para fazer a redefinição de sua senha. Se não encontrar na sua caixa de entrada, procure também na sua caixa de spam.
            </SubTitle>

            <SubTitle>
                SE PRECISAR, CLIQUE PARA REENVIAR.
            </SubTitle>    
                        
            <Button 
                title='REENVIAR E-MAIL' 
                outLine
            />
        </Container>
    )

}