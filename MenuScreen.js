import React, {Component} from 'react';
import {Text, View, Image, Button } from 'react-native';

export default class MenuScreen extends Component{
    static navigationOptions = {
        drawerIcon: (
       <Image source={require("../images/ICONS/ic_person_outline_3x.png")} />
        )
      }

    render(){
        return (
            <View style = {styles.containerStyle}>
            <Text>* Account Information* </Text>
            <Button
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
            title="Back"
            />
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}