import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import  {Header} from '@components/Header';
import  {Input} from '@components/Input';
import { Center, Container, ForgotPassword, LabelBold, Label, Down, ChangeScreen } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@components/Button';

export  function Home({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="auto" />
      <Header/>
      <Center>
        <Input title='E-MAIL'/>
        <Input title='SENHA'/>
        <ChangeScreen
        onPress={() => navigation.navigate('VerifyEmail')}>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </ChangeScreen>
        <Button 
        title='LOGIN' 
        onPress={() => navigation.navigate('Products')}    
        />
        <LabelBold>OU</LabelBold>
        <Button 
          title='LOGIN GOOGLE'      
          border='#1E90FF'
          colorText='#1E90FF'
          background='#fff'
          />
           <Down>
            <Label>Não é cadastrado ?</Label>
            <Button 
            title='CADASTRE-SE'
            onPress={() => navigation.navigate('Register')}    
            />
           </Down>
      </Center>
    </Container>
  );
}

