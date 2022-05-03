import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
        {tasks.map((task) => (
          <Text key={task}>{task}</Text>
        ))}
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
});
