import { useState } from "react";
import { v1 as uuid } from "uuid";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {
    setTaskText(enteredText);
  };

  const addTaskHandler = () => {
    setTasks((current) => [...current, taskText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={taskInputHandler}
          style={styles.textInput}
          placeholder="Your task"
        />
        <Button title="Add task" onPress={addTaskHandler} />
      </View>
      <View style={styles.tasksContainer}>
        <ScrollView>
          {tasks.map((task) => (
            <View key={uuid()} style={styles.taskItem}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  tasksContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5E08CC",
  },
  taskText: {
    color: "#fff",
    textAlign: "center",
  },
});
