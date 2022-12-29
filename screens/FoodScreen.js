import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import apiKey from '../apiKey';
import FoodItem from '../components/FoodItem.js';

const Post = "https://yorickdv.be/wp-json/wp/v2/posts/"
let PostNum = -1

const FoodScreen = navigation =>{
    const [foods, setFoods] = useState([]);

    const getFoodsByDefault = async () => {

        //getting title
        try {
          const response = await fetch(Post, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "food144.p.rapidapi.com",
              "x-rapidapi-key": apiKey
            }
          })
          const json = await response.json();
          while (PostNum < json.length - 1){
            PostNum++
            let Title = json[PostNum].title.rendered
            let Status = json[PostNum].status
            let Excerpt = json[PostNum].excerpt.rendered
            let Id = json[PostNum].id
            console.log("Food: " + Title);
          }
          setFoods(json.results);
        } catch (error) {
          console.error(error);
        }
      }
      
      useEffect(() => {
        getFoodsByDefault();//laad foods wanneer het scherm laadt
      }, []);


    return (
<View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <FoodItem title="Food Title"></FoodItem>
    <StatusBar style="auto" />
</View>
  );
    }


    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FoodScreen;