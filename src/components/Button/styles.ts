import styled from 'styled-components/native';

interface Props {
    width?: number;
    background?: string;
    borderColor?: string;
    color?: string;
    marginTop?: number;
    outline?: boolean;
}
export const Container = styled.TouchableOpacity<Props>`
    width: ${(props) =>  props.width ? props.width  : '100%' }%;
    height: 52px;
    background-color: ${(props) =>  props.outline ? '#fff'  : '#1E90FF' };
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 2px;
    border-color: ${(props) =>  props.outline ? '#fff'  : '#1E90FF' };
    margin-top:${(props) => props.marginTop ? props.marginTop : 13}px;
`

export const Title = styled.Text<Props>`
    color: ${(props) =>  props.outline ? '#1E90FF'  : '#fff' };
    font-size: 13px;
    line-height: 15px;
    font-weight: 900;
`