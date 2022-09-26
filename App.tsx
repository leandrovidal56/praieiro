import { ChangePassword } from '@screens/ChangePassword';
import { Home } from '@screens/Home';
import { Products } from '@screens/Products/indes';
import { Profile } from '@screens/Profile';
import { Register } from '@screens/Register';
import { RegisterNewProduct } from '@screens/RegisterNewProduct';
import { Request } from '@screens/Request';
import { VerifyEmail } from '@screens/VerifyEmail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'   screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          component={Home} 
        />
        <Stack.Screen
          name="Register"
          component={Register} 
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword} 
        />
        <Stack.Screen
          name="Products"
          component={Products} 
        />
        <Stack.Screen
          name="RegisterNewProduct"
          component={RegisterNewProduct} 
        />
        <Stack.Screen
          name="Request"
          component={Request} 
        />
        <Stack.Screen
          name="Profile"
          component={Profile} 
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


