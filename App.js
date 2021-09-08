import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import GoalInput from './components/GoalInput/GoalInput';
import GoalItem from './components/GoalItem/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddGoal, setIsAddGoal] = useState(false);

  const openingModalHandler = () => {
    setIsAddGoal(true);
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals(prevGoals => [
      ...prevGoals, 
      { id: (prevGoals.length + 1).toString(), value: goalTitle 
    }]);
    setIsAddGoal(false);
  }

  const deleteGoalHandler = goalId => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddGoal(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={openingModalHandler}>
        <Text style={styles.buttonText}>Add A New Goal</Text>
      </TouchableOpacity>
      <GoalInput visible={isAddGoal} goal onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={(deleteGoalHandler)} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: '#0c55f2',
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  }
});
