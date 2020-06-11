/*
note: the commented out sections are the codes for when implementing without reducer
*/

// import React, {useState}from 'react';
import React, {useReducer}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
    switch(action.type){
        case 'change_red':
            return state.red + action.playload >255 || state.red + action.playload < 0
            ? state 
            : {...state, red: state.red + action.playload};
        case 'change_green':
            if(state.green + action.playload >255 || state.green + action.playload < 0){
                return state;
            }
            return {...state, green: state.green + action.playload};
        case 'change_blue':
            if(state.blue + action.playload >255 || state.blue + action.playload < 0){
                return state;
            }
            return {...state, blue: state.blue + action.playload};
        default:
            return state;
    }
};


const SquareScreen = () =>{
    const[state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
    const {red, green, blue} = state;
    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    const COLOR_CHANGE = 10;

    // const setColor = (color, change) => {
    //     switch (color){
    //         case 'red':
    //             red + change>255|| red + change < 0 ? null : setRed(red+change);
    //             return;
                
    //         case 'blue':
    //             blue + change>255|| blue + change < 0 ? null : setBlue(blue+change);
    //             return;

    //         case 'green':
    //             green + change>255|| green + change < 0 ? null : setGreen(green+change);
    //             return;
    //         default:
    //             return;
    //     }
    // };

    return <View>
        <ColorCounter color="Red"
        // onIncrease={()=> setColor('red', COLOR_CHANGE)} onDecrease={()=>setColor('red', -1 * COLOR_CHANGE)}
        onIncrease={()=> dispatch({ type:'change_red', playload : COLOR_CHANGE})} 
        onDecrease={()=> dispatch({ type:'change_red', playload : -1 * COLOR_CHANGE})}
        />
        <ColorCounter color="Blue"
        // onIncrease={()=> setColor('blue', COLOR_CHANGE)} onDecrease={()=>setColor('blue', -1 * COLOR_CHANGE)}
        onIncrease={()=> dispatch({ type:'change_blue', playload : COLOR_CHANGE})} 
        onDecrease={()=> dispatch({ type:'change_blue', playload : -1 * COLOR_CHANGE})}
        />
        <ColorCounter color="Green"
        // onIncrease={()=> setColor('green', COLOR_CHANGE)} onDecrease={()=>setColor('green', -1 * COLOR_CHANGE)}
        onIncrease={()=>  dispatch({ type:'change_green', playload : COLOR_CHANGE})} 
        onDecrease={()=>  dispatch({ type:'change_green', playload : -1 * COLOR_CHANGE})}
        />
        <View style={{
            height: 150, 
            width: 150, 
            backgroundColor:`rgb(${red}, ${green}, ${blue})`
            }}/>
    </View>
}

const styles = StyleSheet.create({});

export default SquareScreen;