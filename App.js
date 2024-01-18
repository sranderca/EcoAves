import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Easing } from "react-native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

//screens
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Home from "./src/screens/Home";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
    stiffiness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: config,
          close: closeConfig,
          headerShown: false,
        },
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      }}
      headerMode="none"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Buitre Cienaga" component={Screen1} />
      <Stack.Screen name="Pato Colorado" component={Screen2} />
      <Stack.Screen name="Pato Brasilero" component={Screen3} />
    </Stack.Navigator>
  );
};
const App = () => {
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  return (
    <NavigationContainer>
      <AppStack auth={auth} />
    </NavigationContainer>
  );
};

export default App;
