import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Products } from '@screens/Products/indes';
import { Profile } from '@screens/Profile';
import { Register } from '@screens/Register';
import { RegisterNewProduct } from '@screens/RegisterNewProduct';
import { Request } from '@screens/Request';
import { VerifyEmail } from '@screens/VerifyEmail';
import { ChangePassword } from '@screens/ChangePassword';


const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
    return (
        <Navigator 
            initialRouteName='Home'   
            screenOptions={{headerShown: false}}
        >
            <Screen
                name="Home"
                component={Home} 
            />
            <Screen
                name="Register"
                component={Register} 
            />
            <Screen
                name="ChangePassword"
                component={ChangePassword} 
            />
            <Screen
                name="Products"
                component={Products} 
            />
            <Screen
                name="RegisterNewProduct"
                component={RegisterNewProduct} 
            />
            <Screen
                name="Request"
                component={Request} 
            />
            <Screen
                name="Profile"
                component={Profile} 
            />
            <Screen
                name="VerifyEmail"
                component={VerifyEmail} 
            />
      </Navigator>
    )
}