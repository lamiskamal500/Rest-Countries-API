import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Country = (props)=>{
    return(
        <View style={styles.countyScreen}>
            <Text name={props.name}></Text>
        </View>
    );

};
const styles = StyleSheet.create({
    countyScreen:{
        width:'70%',
        height:300,
        backgroundColor:'hsl(209, 23%, 22%)',
        marginVertical:50,
        borderRadius:10
    }
})
export default Country;