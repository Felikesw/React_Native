import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'counter_plus':
            return {...state, counter: state.counter+action.playload};
        case 'counter_minus':
            return {...state, counter: state.counter+action.playload};
        default:
            return state;
    }
}

const CounterScreen = () =>{
    const[state, dispatch] = useReducer(reducer, {counter : 0});
    const {counter} = state;

    return( 
        <View>
            <Button title="Increase" onPress={() =>{
                dispatch({type: "counter_plus", playload: 1});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: "counter_minus", playload: -1});
            }}/>
            <Text>
                Current Count: {counter}
            </Text>
        </View>);
    };

const style = StyleSheet.create({});

export default CounterScreen;