import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const taskInputHandler = (enteredText) => {
    setTaskText(enteredText);
  };

  const addTaskHandler = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={taskText}
        onChangeText={taskInputHandler}
        style={styles.textInput}
        placeholder="Your task"
      />
      <Button title="Add task" onPress={addTaskHandler} />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
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
});
