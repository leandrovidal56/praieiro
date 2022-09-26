import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin: ${16 + getStatusBarHeight()}px 20px ${16 + getBottomSpace()}px;
`

export const Header = styled.Text`
    margin-top: 115px;
    margin-bottom: 68px;
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.015em;
    text-align: center;
`
export const LineAcess = styled.View`
    flex-direction: row;
    width: 100%;
    justify-items: center;
`

export const Acess = styled.Text`
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.015em;
    text-align: center;
    /* margin-bottom: 56px; */
`

export const SubTitle = styled.Text`
    color: #000000;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    margin-top: 50px;
    
` 

export const AcessBold = styled.Text`
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: -0.015em;
    text-align: center;
    padding-left: 10px;
    margin-left: 10px;
    `
