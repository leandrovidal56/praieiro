import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
    width?: number;
    background?: string;
    borderColor?: string;
    color?: string;
    marginTop?: number;
}
export const Container = styled.View<Props>`
    width: ${(props) =>  props.width ? props.width  : '100%' }%;
    height: 52px;
    background-color: ${(props) =>  props.background ? props.background  : '#1E90FF' };
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px;
    border-color: ${(props) =>  props.borderColor ? props.borderColor : '#1E90FF' };
    margin-top:${(props) => props.marginTop ? props.marginTop : 13}px;
`
export const ChangeScreen =styled(RectButton)`
`

export const Title = styled.Text<Props>`
    color: ${(props) =>  props.color ? props.color : '#fff' };
    font-size: 13px;
    line-height: 15px;
    font-weight: 900;
`