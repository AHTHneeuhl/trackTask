import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskItem = ({ text, onRemoveTask, taskId }) => (
  <Pressable onPress={() => onRemoveTask(taskId)}>
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{text}</Text>
    </View>
  </Pressable>
);

export default TaskItem;

const styles = StyleSheet.create({
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
