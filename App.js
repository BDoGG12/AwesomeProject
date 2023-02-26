import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = (goal) => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: goal, key: Math.random().toString()}]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput goalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
        data={courseGoals}
        style={styles.goalText}
        renderItem={(itemData) => {
          return (
            <GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler} />
          )
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottom: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 6
  }
});
