
import  {Header} from '@components/Header';
import  {Input} from '@components/Input';
import { Content, Container, ForgotPassword, LabelBold, Label, Down, ChangeScreen } from './styles';
import { Button } from '@components/Button';

export  function Home({ navigation }: any) {
  return (
    <Container>
      <Header/>

      <Content>
        <Input title='E-MAIL'/>
        <Input title='SENHA'/>

        <ChangeScreen onPress={() => navigation.navigate('VerifyEmail')}>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </ChangeScreen>

        <Button 
        title='LOGIN' 
        onPress={() => navigation.navigate('Products')}    
        />
        <LabelBold>OU</LabelBold>
        <Button 
          title='LOGIN GOOGLE'      
          outLine
        />

        <Down>
          <Label>Não é cadastrado ?</Label>
          <Button 
          title='CADASTRE-SE'
          onPress={() => navigation.navigate('Register')}    
          />
        </Down>

      </Content>
    </Container>
  );
}

