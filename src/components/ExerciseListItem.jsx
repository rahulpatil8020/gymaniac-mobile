import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseListItem = ({ item }) => {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item?.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item?.muscle.toUpperCase()} | {item?.equipment.toUpperCase()}
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
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 500,
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
