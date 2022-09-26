import React from 'react'
import { Content, Description, Picture, Settings, SubTitle, Title } from './styles'
import Icon from 'react-native-vector-icons/Entypo';


type Props = {
    title: string;
    subTitle?: string;
}

export function ItemProduct ({title, subTitle}: Props) {
    return (
        <Content>
            <Picture/>
            <Description>
                <Title>{title}</Title>
                <SubTitle>{subTitle ? subTitle : 'Descrição'}</SubTitle>
            </Description>
            <Settings>
                <Icon 
                    name="dots-three-vertical"
                    size={18}
                    color="#1E90FF"
                />
            </Settings>
        </Content>
    )
      


    
}