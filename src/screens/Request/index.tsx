import { Input } from '@components/Input';
import React from 'react';
import { Button } from '@components/Button';
import { All, Container} from './styles';
import { Return } from '@components/Return';
import { InputPicture } from '@components/InputPIcture';
import { Picture } from '@components/Picture';
import { Menu } from '@components/Menu';
import { RequestCard } from '@components/RequestCard';
import { AvaliableCard } from '@components/AvaliableCard';


export function Request () {
    return (
        <All>
            <Container>
                <Return 
                    title='SOLICITAÇÕES'
                    />
               <RequestCard
                date='Qua, 8 de Jun 2021'
                name='Pedro'
                distance='5 KM'
               />
               <RequestCard
                date='Qua, 8 de Jun 2021'
                name='Pedro'
                distance='5 KM'
               />
               <AvaliableCard
                date='Qua, 8 de Jun 2021'
                name='Roberto'
                note={3.5}
               />
               <AvaliableCard
                date='Qua, 8 de Jun 2021'
                name='Amaral'
               />

            </Container>
            <Menu/>
        </All>
    )
}