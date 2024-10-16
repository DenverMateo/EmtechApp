import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function textInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal); 
        setEnteredGoal(''); 
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal"
                onChangeText={textInputHandler}  
                value={enteredGoal} 
            />
            {/*<Button title="ADD GOAL" color="#1E847F" onPress={addGoalHandler} />*/}
            <Pressable onPress={addGoalHandler} 
              style={({ pressed }) => [
                styles.button,
                pressed ? styles.pressed : null 
            ]}>
              <Text style={styles.buttonText}>ADD GOAL!</Text>
            </Pressable>
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1E847F',
  },
  textInput: {
    height: 40,
    borderColor: '#1E847F',
    borderWidth: 2,
    padding: 3,
    marginRight: 8,
    width: '70%',
    flex: 1,
    borderRadius: 3,
  },
  button: {
    backgroundColor: '#1E847F',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5, 
  },
});
