import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from "graphql-request";
import client from "../graphqlClient";

const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      muscle
      name
      equipment
    }
  }
`;

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => client.request(exercisesQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch exercises</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        vertical
        contentContainerStyle={{ gap: 10 }}
        data={data?.exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0efef",
    justifyContent: "center",
    padding: 10,
  },
});
