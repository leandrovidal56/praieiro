import React from 'react';

import Return from '@components/Return';
import Menu from '@components/Menu';
import RequestCard from '@components/RequestCard';
import AvaliableCard from '@components/AvaliableCard';

import { All, Container} from './styles';


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