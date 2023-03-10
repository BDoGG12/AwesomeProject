import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem} id={props.id}>
      <Pressable
      android_ripple={{ color: '#dddddd' }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 6
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  }
});