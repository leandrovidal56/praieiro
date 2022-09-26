import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const All = styled.View`
    height: 92%;
    margin: ${16 + getStatusBarHeight()}px 20px ${16 + getBottomSpace()}px;
`

export const Container = styled.View`
    flex: 1;
`

export const Header = styled.Text`
    font-size: 36px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.015em;
`

export const LineEmail = styled.View`
    flex-direction: row;
    margin-bottom: 34px;
    align-items: center;
`

export const Email = styled.Text`
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: -0.015em;
`