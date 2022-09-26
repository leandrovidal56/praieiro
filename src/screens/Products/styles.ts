import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const All = styled.View`
    height: 92%;
    margin: ${16 + getStatusBarHeight()}px 20px ${16 + getBottomSpace()}px;
`

export const Container = styled.View`
    flex: 1;
    justify-content: stretch;
`


export const Content = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`

export const Picture = styled.View`
    width: 58px;
    height: 59px;
    border-radius: 28px;
    background: #C4C4C4;
    margin-right: 10px;
`

export const Description = styled.View`
    height: 40px;
`

export const Title = styled.Text`
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
    color: #000000;
`
export const ProductName = styled.Text`
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
    color: #000000;
`

export const Star = styled.View`
    flex-direction: row;
    align-items: center;
`

export const SubTitle = styled.Text`
    margin-left: 5px;
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    color: #000000;

`