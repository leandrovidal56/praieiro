import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import { ChangeScreen, Container } from './styles';

export default function Menu ({navigation}: any) {
    return(
        <Container>
            <ChangeScreen
            onPress={() => navigation.navigate('Home')}    
            >
            <Icon 
                name="home"
                size={18}
                color=" #1E90FF"
                />
            </ChangeScreen>
            <ChangeScreen
            onPress={() => navigation.navigate('Request')}
            >
            <Icon2 
                name="file-1"
                size={18}
                color=" #1E90FF"
                />
            </ChangeScreen>
            <ChangeScreen
            onPress={() => navigation.navigate('Profile')}    
            >
            <Icon3
            name="user-circle"
            size={18}
            color=" #1E90FF"
            />
            </ChangeScreen>
        </Container>
    )
}