import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const enteredGoalHandler = enteredText => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return ( 
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Add goals here' 
                style={styles.textInputStyles} 
                onChangeText={enteredGoalHandler} 
                value={enteredGoal}
                />
                <View style={styles.buttonStyle}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={onCancel} color='red' />
                    </View>
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
     );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyles: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        padding: 10,
        marginBottom: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})
 
export default GoalInput;