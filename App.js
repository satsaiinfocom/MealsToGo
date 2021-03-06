import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { ThemeProvider } from "styled-components/native";
import firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
LogBox.ignoreLogs(["Remote debugger"]);
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyW7W298gGzZovoGOAo74SvNA-aEWOmSw",
  authDomain: "mealstogo-63693.firebaseapp.com",
  projectId: "mealstogo-63693",
  storageBucket: "mealstogo-63693.appspot.com",
  messagingSenderId: "315938345949",
  appId: "1:315938345949:web:d4842917cc504725201c34",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
