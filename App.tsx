import * as React from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect} from 'react';

async function checkGeolocationPermission(): Promise<boolean> {
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );

  return status === PermissionsAndroid.RESULTS.GRANTED;
}

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
      <Button
        title="Check use focus effect"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'FocusEffect'}],
          })
        }
      />
      <Button
        title="Check use effect"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'UseEffect'}],
          })
        }
      />
    </View>
  );
}

function FocusEffectScreen() {
  useFocusEffect(() => {
    checkGeolocationPermission();
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>FocusEffect Screen</Text>
    </View>
  );
}

function UseEffectScreen() {
  useEffect(() => {
    checkGeolocationPermission();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>UseEffect Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FocusEffect" component={FocusEffectScreen} />
        <Stack.Screen name="UseEffect" component={UseEffectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
