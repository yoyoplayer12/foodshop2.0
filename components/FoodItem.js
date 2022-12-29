// import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import apiKey from '../apiKey';

const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"

function FoodItem(props){
    return(
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
export default FoodItem;