import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) return <Text>Exercise Details not Found</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "" }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subtitleHalf}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subtitleHalf}>{exercise.equipment}</Text>
        </Text>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  panel: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: 700,
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subtitleHalf: {
    textTransform: "capitalize",
  },
  instructions: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
});
