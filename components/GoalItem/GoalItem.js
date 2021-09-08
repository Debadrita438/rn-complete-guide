import React from 'react';
import { Text, StyleSheet, TouchableNativeFeedback, View } from 'react-native';


const GoalItem = ({ title, onDelete, id }) => {
    return (
        <TouchableNativeFeedback onPress={() => onDelete(id)}>
            <View style={styles.listItems}>
                <Text>{title}</Text>
            </View>
        </TouchableNativeFeedback>    
    );
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem;