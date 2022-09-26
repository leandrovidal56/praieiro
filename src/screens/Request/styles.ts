import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
`

export const All = styled.View`
    height: 92%;
    margin: ${16 + getStatusBarHeight()}px 20px ${16 + getBottomSpace()}px;
`