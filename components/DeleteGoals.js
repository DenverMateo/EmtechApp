import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function DeleteAllGoalsButton(props) {
    return (
        <View style={styles.buttonContainer}>
            <Button
                title="Delete All Goals"
                color="#FF6F61"
                onPress={props.onDeleteAll}  
            />
        </View>
    );
}

export default DeleteAllGoalsButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
});
