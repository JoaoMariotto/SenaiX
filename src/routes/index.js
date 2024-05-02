import Start from '../screens/Start';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator()
export default function Routes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Start">
            <Stack.Screen name="Start" component={Start}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    );
};