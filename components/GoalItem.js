import {StyleSheet, View, Text} from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: 8,
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 6
  },
  goalText: {
    color: 'white'
  }
});