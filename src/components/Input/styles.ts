import styled from 'styled-components/native'

interface Props {
    inputLarge: string;
    marginBottom?: number;
}

export const Container = styled.View<Props>`
    border: 2px solid #000000;
    height: ${(props) =>  props.inputLarge ? props.inputLarge  : 52 }px;
    padding-left: 6px;
    padding-top: 4px;
    margin-bottom: ${(props) =>  props.marginBottom ? props.marginBottom  : 17 }px;
`

export const Text = styled.Text`
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.04em;
`
export const Title = styled.Text`
    font-size: 13px;
    color: #000000;
    line-height: 15.23px;
    font-weight: 400;
`
