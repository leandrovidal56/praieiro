import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container =  styled.View`
    flex: 1;
`
export const Content = styled.View`
    margin: ${16 + getStatusBarHeight()}px 16px ${16 + getBottomSpace()}px;
`

export const ForgotPassword = styled.Text`
    text-align: right;
    font-size: 13px;
    font-weight: 400;
    line-height: 14.5px;
`

export const LabelBold = styled.Text`
    font-size: 13px;
    font-weight: 900;
    line-height: 15px;
    text-align: center;
    margin-top: 5px;
`

export const Down = styled.View`
    margin-top: 52px;
`

export const Label = styled.Text`
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    margin-top: 5px;
`

export const ChangeScreen =styled.TouchableOpacity`
`