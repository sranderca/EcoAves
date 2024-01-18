import React, { useState } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginScreen = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("Signed In!");
      const user = userCredential.user;
      console.log(user);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/LoginScreen.png")}
        style={[styles.image, StyleSheet.absoluteFill]}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={30}>
          <View style={styles.login}>
            <Image
              source={require("../../assets/EcoAvesLogo1.png")}
              style={styles.logo}
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "black" }}>
                E-mail
              </Text>
              <TextInput
                onChange={(text) => setEmail(text)}
                style={styles.input}
                placeholder="E-mail"
              />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "black" }}>
                Password
              </Text>
              <TextInput
                onChange={(text) => setPassword(text)}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={handleSignIn}
              style={[styles.button, { backgroundColor: "#147B49" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[styles.button, { backgroundColor: "#606060" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});

export default LoginScreen;
