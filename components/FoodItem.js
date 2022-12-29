// import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';


const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"




const FoodItem = ({ title }) => {
    return(
        <View style={styles.post}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    post: {
      flex: 1,
      borderWidth: 1,
      borderColor: "black",
      marginTop: 10,
      width: '45%',
    }
  });
export default FoodItem;