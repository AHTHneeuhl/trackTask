import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (taskText) => {
    setTasks((current) => [
      ...current,
      { text: taskText, id: Math.random().toString() },
    ]);
  };

  const removeTaskHandler = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(task) => (
            <TaskItem
              taskId={task.item.id}
              text={task.item.text}
              onRemoveTask={removeTaskHandler}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
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
  tasksContainer: {
    flex: 5,
  },
});
