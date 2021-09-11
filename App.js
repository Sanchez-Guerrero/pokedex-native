import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri";

import api from "./utils/api";

export default function App() {
  const [imagePokemon, setImagePokemon] = useState(null);
  const [namePokemon, setNamePokemon] = useState("");
  const [abilityPokemon, setAbilityPokemon] = useState([]);
  const [attack, setAttack] = useState([]);
  const [speDefense, setSpeDefense] = useState([]);

  useEffect(() => {
    obtenerPokemon();
  });

  const obtenerPokemon = async () => {
    let pokemon = await api();
    setImagePokemon(pokemon.sprites.other.dream_world.front_default);
    setNamePokemon(pokemon.name);
    setAbilityPokemon(pokemon.abilities[0].ability.name);
    setAttack(pokemon.stats[1].base_stat);
    setSpeDefense(pokemon.stats[4].base_stat);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageCont}>
        <Text style={styles.text}>{namePokemon.toUpperCase()}</Text>
        <SvgUri
          width="200"
          height="200"
          source={{
            uri: `${imagePokemon}`,
          }}
        />
        <View style={styles.description}>
          <View style={styles.ability}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Ability
            </Text>
            <Text style={{ color: "green", fontSize: 15, textAlign: "center" }}>
              {abilityPokemon}
            </Text>
          </View>
          <View style={styles.attack}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Attack
            </Text>
            <Text style={{ color: "red", fontSize: 15, textAlign: "center" }}>
              {attack}-k
            </Text>
          </View>
          <View style={styles.specialAttack}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Special defense
            </Text>
            <Text style={{ color: "blue", fontSize: 15, textAlign: "center" }}>
              {speDefense}-k
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  imageCont: {
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#fff",
    width: 350,
    height: 350,
  },
  text: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#38A3A5",
    color: "#80ED99",
    borderRadius: 25,
  },
  description: {
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350,
    justifyContent: "space-around",
  },
  ability: {
    marginLeft: 20,
  },
  attack: {
    marginLeft: 20,
  },
  specialAttack: {
    marginLeft: 20,
  },
});
