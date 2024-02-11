import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";

const exercisesQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      name
      muscle
      equipment
      instructions
    }
  }
`;

export default function ExerciseDetailsScreen() {
  const { name } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises", name],
    queryFn: () => client.request(exercisesQuery, { name }),
  });
  // const exercise = exercises.find((item) => item.name === params.name);

  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
  const exercise = data?.exercises[0];
  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Some Error has Occurred.</Text>;
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
