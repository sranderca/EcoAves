import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import ViewContainer from "../components/ViewContainer";

const Home = ({ navigation }) => {
  return (
    <ViewContainer>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Especies de aves amenazadas en DRMI: Laguna de Sonso
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Buitre Cienaga")}>
        <Text style={styles.button}>Anhima cornuta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pato Colorado")}>
        <Text style={styles.button}>Anas cyanoptera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pato Brasilero")}>
        <Text style={styles.button}>Sarkidiornis melanotos</Text>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    margin: 10,
    backgroundColor: "#3498db",
    borderRadius: 10,
  },
});
