import React from 'react';
import { ScrollView , View} from 'react-native';

const CountryScreen = ()=>{
    return(
        <ScrollView>
        <View style = {styles.screen}>
        <View style={styles.mode}>
        <Text style={styles.modeText}>Where in the world?</Text>
        <Text style={styles.modeText}>Dark Mode</Text>
      </View>
      </View>
      </ScrollView>
    );

};
const styles = StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor: 'hsl(207, 26%, 17%)',
      height:'100%',
      alignItems:'center'
    },
    mode:{
      backgroundColor:'hsl(209, 23%, 22%)',
      height:100,
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      color:'hsl(0, 0%, 100%)',
      alignItems:'center',
    },
    modeText:{
      fontSize:20,
      fontWeight:'600',
      marginHorizontal:20
    },
});
export default CountryScreen;