import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const TaskInput = ({ onAddTask, visible, onCancel }) => {
  const [taskText, setTaskText] = useState("");

  const taskInputHandler = (enteredText) => {
    setTaskText(enteredText);
  };

  const addTaskHandler = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={taskText}
          onChangeText={taskInputHandler}
          style={styles.textInput}
          placeholder="Your task"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add task" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
