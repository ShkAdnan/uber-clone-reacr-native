import { KeyboardAvoidingView} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import { Platform } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={ store }>
          <SafeAreaProvider>
            <NavigationContainer>
              <KeyboardAvoidingView 
              behavior={Platform.os === 'ios' ? "padding" : "height"}
              keyboardVerticalOffset={Platform.os === 'ios' ? -64 : 0 }
              style={{flex : 1}}>
                <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                    headerShown : false
                  }}/>
                  <Stack.Screen name="MapScreen" component={MapScreen}  options={{
                    headerShown : false
                  }}/>
                </Stack.Navigator>
              </KeyboardAvoidingView>
            </NavigationContainer>
          </SafeAreaProvider>
    </Provider>
  );
}

