import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseListItem = ({ item }) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item?.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subtitleHalf}>{item?.muscle.toUpperCase()} </Text> |{" "}
        <Text style={styles.subtitleHalf}>{item?.equipment.toUpperCase()}</Text>
      </Text>
    </View>
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
