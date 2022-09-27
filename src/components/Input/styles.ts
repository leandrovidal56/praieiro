import styled from 'styled-components/native'

interface Props {
    inputHeight: string;
    marginBottom?: number;
}

export const InputText = styled.TextInput<Props>`
    border: 2px solid #000000;
    height: ${(props) =>  props.inputHeight ? props.inputHeight  : 52 }px;
    padding-left: 6px;
    padding-top: 4px;
    margin-bottom: ${(props) =>  props.marginBottom ? props.marginBottom  : 17 }px;
`
