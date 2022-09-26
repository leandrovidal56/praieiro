import styled from 'styled-components/native'

export const Content = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    /* justify-content: space-between; */
    margin-top: 20px;
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
    justify-content: space-between;
    /* background-color: yellow; */
    width: 75%;
    
`

export const Title = styled.Text`
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
    font-size: 11px;
    line-height: 12px;
    font-weight: 400;
    color: #000000;

`
export const Settings = styled.View`
    align-items: flex-end;
    /* background-color: red; */
`
