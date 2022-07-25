/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import DialogScreen from '../screens/DialogScreen';
import CreateQuote from '../screens/CreateQuoteScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Text, View } from '../components/Themed';
import ModalScreen from '../screens/ModalScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} 
        options={{ 
          headerTitle: () => (
            <Text 
              style={{ 
                fontSize: 26, 
                letterSpacing: 8,
                fontWeight: 'bold' 
              }}
            >HWRQ</Text>
          ),
         }} 
      />
      <Stack.Screen name="Dialog" component={DialogScreen} 
        options={( {navigation}: RootTabScreenProps<'Dialog'>) => ({ 
          headerTitle: () => (
            <Text style={{ fontSize: 22 }}>Yuuka Kazami</Text>
          ),
          animation: 'fade',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: 2,
                marginRight: 8,
                marginLeft: -8,
                borderRadius: 100,
              }}
            >
              <Image 
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                source={require('../assets/images/yuuka.png')}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="CreateQuote" component={CreateQuote} 
        options={{
          headerTitle: () => (
            <Text 
              style={{ 
                fontSize: 22,
                fontWeight: 'bold' 
              }}
            >Create a new Quote</Text>
          ),
          animation: 'fade'
        }}
      />
      <Stack.Screen name="Modal" component={ModalScreen} 
        options={{
          headerTitle: () => (
            <Text 
              style={{ 
                fontSize: 22,
                fontWeight: 'bold' 
              }}
            >About</Text>
          ),
          animation: 'fade'
        }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTitle: () => (
            <Text style={{ fontSize: 20 }}>Yuuka Kazami</Text>
          ),
          headerLeft: () => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                marginLeft: 8,
                borderRadius: 100,
              }}
            >
              <Image 
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                source={require('../assets/images/yuuka.png')}
              />
            </View>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="plus-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen 
        name="CreateQuote"
        component={CreateQuote}
        options={{
          title: 'Create a new Quote',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-circle" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
