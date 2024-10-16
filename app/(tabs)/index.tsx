import { StyleSheet, View, Image, FlatList, ScrollView, Modal, Text, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from 'C:/Users/Denver/awesomeProject/components/GoalItem.js';
import GoalInput from 'C:/Users/Denver/awesomeProject/components/GoalInput.js';
import DeleteGoals from 'C:/Users/Denver/awesomeProject/components/DeleteGoals.js';

export default function HomeScreen() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newGoal, setNewGoal] = useState('');

    function addGoalHandler(enteredGoal) {
        if (!enteredGoal || enteredGoal.trim() === '') return; 

        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { key: Math.random().toString(), item: enteredGoal }, 
        ]);
        setNewGoal(enteredGoal); 
        setModalVisible(true); 
    } 
    function closeModalHandler() {
        setModalVisible(false); 
    }

    function deleteAllGoalsHandler() {
        setCourseGoals([]);  
    }
    
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/goals.png')}
                style={styles.image}
            />
            <GoalInput 
                onAddGoal={addGoalHandler}  
            />
            <View style={styles.goalListContainer}>
            {/*<ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {courseGoals.map((goal) => (
                        <GoalItem key={goal.key} text={goal.item} />
                    ))}
            </ScrollView>
            */}

            <FlatList
                data={courseGoals}
                renderItem={({ item }) => (
                    <GoalItem text={item.item} /> 
                )}
                keyExtractor={(item) => item.key}
            />
            {courseGoals.length > 0 && (
                <DeleteGoals onDeleteAll={deleteAllGoalsHandler} />
            )}
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModalHandler} 
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Goal Added: {newGoal}</Text>
                        <Button title="Close" onPress={closeModalHandler} color={"#1E847F"} />
                    </View>
                </View>
            </Modal>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECC19C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalListContainer: {
        width: '80%',
        flex: 1,
        height: 200,
        maxHeight: 250,
        paddingBottom: 10,
    },
    image: {
        width: 300,
        height: 150,
        marginBottom: 20,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    buttonContainer: {
        width: '80%',
        paddingTop: 10,
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
