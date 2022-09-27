import React from 'react';
import { InputText } from './styles';

 type Props = {
    inputHeight?: string;
    title?: string;
    text?: string;
    marginBottom?: number;
};

export function Input ({inputHeight, title, text, marginBottom}: Props) {
    return (
        <InputText placeholder={title || text} inputHeight={inputHeight} marginBottom={marginBottom}/>
    )
}