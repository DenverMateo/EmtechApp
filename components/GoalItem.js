import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        width: '100%',
        borderColor: '#1E847F',
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#1E847F',
        shadowOpacity: 90,
    },
    goalText: {
        fontSize: 16,
        color: '#fff',
    },
});
