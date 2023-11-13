import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './Pages/Index';
import Calculadora from './Pages/Calculadora';
import Serie from './Pages/Serie';
import Paralelo from './Pages/Mixto';
import Mixto from './Pages/Paralelo';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
          name="Inicio"
          component={Index}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Serie" component={Serie} />
        <Stack.Screen name="Paralelo" component={Paralelo} />
        <Stack.Screen name="Mixto" component={Mixto} />
        <Stack.Screen
        name="Calculadora" component={Calculadora} options={{
          title : 'OhmLyApp', headerStyle: {
            backgroundColor: '#E02244'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
