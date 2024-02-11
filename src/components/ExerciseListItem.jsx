import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

const ExerciseListItem = ({ item }) => {
  return (
    <Link href={`/${item?.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item?.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subtitleHalf}>{item?.muscle} </Text> |{" "}
          <Text style={styles.subtitleHalf}>{item?.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 500,
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subtitleHalf: {
    textTransform: "capitalize",
  },
});
