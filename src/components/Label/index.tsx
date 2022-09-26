import React from 'react';
import { SubTitle } from './styles';

type Props = {
    title: string;
};

export function Label ({title}: Props) {
    return (
    <SubTitle>
        {title}
    </SubTitle>
    )
}