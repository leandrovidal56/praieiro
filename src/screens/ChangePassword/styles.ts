import styled from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin: ${16 + getStatusBarHeight()}px 20px ${16 + getBottomSpace()}px;
    
`