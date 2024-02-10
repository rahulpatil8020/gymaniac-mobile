import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";
import { useState } from "react";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) return <Text>Exercise Details not Found</Text>;

  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "" }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subtitleHalf}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subtitleHalf}>{exercise.equipment}</Text>
        </Text>
        <Text
          style={styles.instructions}
          numberOfLines={seeMoreClicked ? 0 : 10}
        >
          {exercise.instructions}
        </Text>
        <Text
          style={styles.seeMore}
          onPress={() => setSeeMoreClicked((prev) => !prev)}
        >
          {seeMoreClicked ? "See Less" : "See More"}
        </Text>
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
    fontWeight: "700",
  },
  exerciseSubtitle: {
    color: "dimgray",
    fontWeight: "400",
    fontSize: 13,
  },
  subtitleHalf: {
    textTransform: "capitalize",
  },
  instructions: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    fontWeight: "800",
    fontSize: 12,
    color: "gray",
    alignSelf: "center",
    paddingTop: 15,
  },
});
