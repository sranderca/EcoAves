import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ViewContainer from "../components/ViewContainer";
import Colors from "../constants/Colors";

const Screen1 = () => {
  return (
    <ViewContainer backgroundColor={Colors.black}>
      <View style={styles.birdCard}>
        <Image
          source={require("../../assets/anhima.jpg")}
          style={styles.birdImage}
        />
        <View style={styles.birdInfo}>
          <Text style={styles.birdName}>Buitre Cienaga</Text>
          <Text style={styles.scientificName}>Anhima cornuta</Text>
          <Text style={styles.description}>
            Pájaro enorme y extraño. Se encuentra cerca de pantanos de agua
            dulce y ríos en las tierras bajas de la Amazonía. Es mayormente gris
            oscuro y negro, tiene escamas blancas en el cuello y el vientre
            blanco. Su nombre hace referencia al apéndice característico, como
            de unicornio, en la parte superior de su cabeza.
          </Text>
        </View>
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  birdCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
    width: 300,
    maxWidth: "100%",
    textAlign: "center",
  },
  birdImage: {
    width: 300,
    height: 200,
    resizeMode: "cover",
  },
  birdInfo: {
    padding: 20,
  },
  birdName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scientificName: {
    color: "#666",
    marginBottom: 10,
  },
  description: {
    lineHeight: 20,
  },
});

export default Screen1;
