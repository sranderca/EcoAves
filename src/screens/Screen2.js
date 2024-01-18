import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ViewContainer from "../components/ViewContainer";
import Colors from "../constants/Colors";

const Screen2 = () => {
  return (
    <ViewContainer backgroundColor={Colors.black}>
      <View style={styles.birdCard}>
        <Image
          source={require("../../assets/anas.jpg")}
          style={styles.birdImage}
        />
        <View style={styles.birdInfo}>
          <Text style={styles.birdName}>Pato Colorada</Text>
          <Text style={styles.scientificName}>Anas cyanoptera</Text>
          <Text style={styles.description}>
            Pato pequeño con parches azul blancuzco en la parte superior de las
            alas. Los machos son café rojizo por encima. Pico negro. Forrajea en
            las orillas de humedales bajos zambullendo medio cuerpo.
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
export default Screen2;
