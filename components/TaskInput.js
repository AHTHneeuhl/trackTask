import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

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
        <Image
          style={styles.styledImage}
          source={require("../assets/images/task.png")}
        />
        <TextInput
          value={taskText}
          onChangeText={taskInputHandler}
          style={styles.textInput}
          placeholder="Your task"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#F31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add task" onPress={addTaskHandler} color="#B180F0" />
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
    padding: 16,
    backgroundColor: "#311B6B",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E4D0FF",
    borderRadius: 6,
    backgroundColor: "#E4D0FF",
    color: "#120438",
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
  styledImage: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
