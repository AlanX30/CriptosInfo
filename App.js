import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import CoinData from './screens/CoinData'

const Stack = createNativeStackNavigator()

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />

                <Stack.Screen name='Detalles' component={CoinData} options={{
                    headerStyle: { backgroundColor: '#222f3e' }, 
                    headerTitleStyle: { color: 'white'}, 
                    headerBackTitleStyle: { color: 'white'}
                }}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

