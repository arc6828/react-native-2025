import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page2 = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to Page 2</Text>
        <Text>This is a simple React Native page.</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default Page2;