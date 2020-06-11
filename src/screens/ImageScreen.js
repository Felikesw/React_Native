import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () =>{
    return <View>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={1}/>
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={2}/>
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={4}/>
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;