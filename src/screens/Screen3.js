import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ViewContainer from "../components/ViewContainer";
import Colors from "../constants/Colors";

const Screen3 = () => {
  return (
    <ViewContainer backgroundColor={Colors.black}>
      <View style={styles.birdCard}>
        <Image
          source={require("../../assets/sarki.jpg")}
          style={styles.birdImage}
        />
        <View style={styles.birdInfo}>
          <Text style={styles.birdName}>Pato Brasilero</Text>
          <Text style={styles.scientificName}>Sarkidiornis melanotos</Text>
          <Text style={styles.description}>
            Ave acuática grande bicolor. Ambos sexos son color verde-violáceo
            iridiscente arriba con el pecho blanco o beige. Los machos tienen un
            gran bulto negro en el pico, flancos oscuros y vientre blancuzco,
            mientras que las hembras tienen un pico simple y flancos grises.
            Nota las alas totalmente oscuras.
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

export default Screen3;
