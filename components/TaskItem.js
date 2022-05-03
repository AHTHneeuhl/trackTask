import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskItem = ({ text, onRemoveTask, taskId }) => (
  <View style={styles.taskItem}>
    <Pressable
      android_ripple={styles.rippleEffect}
      style={({ pressed }) => pressed && styles.pressedEffect}
      onPress={() => onRemoveTask(taskId)}
    >
      <Text style={styles.taskText}>{text}</Text>
    </Pressable>
  </View>
);

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E08CC",
  },
  taskText: {
    padding: 8,
    color: "#FFFFFF",
    textAlign: "center",
  },
  rippleEffect: {
    color: "#210544",
  },
  pressedEffect: {
    opacity: 0.5,
  },
});
