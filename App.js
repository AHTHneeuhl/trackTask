import { useCallback, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const startAddTaskHandler = useCallback(() => {
    setShowModal(true);
  });

  const endAddTaskHandler = useCallback(() => {
    setShowModal(false);
  });

  const addTaskHandler = (taskText) => {
    setTasks((current) => [
      ...current,
      { text: taskText, id: Math.random().toString() },
    ]);
    endAddTaskHandler();
  };

  const removeTaskHandler = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new task"
        color="#5E08CC"
        onPress={startAddTaskHandler}
      />
      <TaskInput
        onAddTask={addTaskHandler}
        visible={showModal}
        onCancel={endAddTaskHandler}
      />
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
    marginTop: 24,
  },
});
