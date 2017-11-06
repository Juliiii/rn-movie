/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight,
  Dimensions,
  StatusBar,
  PixelRatio,
  TouchableOpacity,
  Animated
} from 'react-native';

import { px2dp } from '../utils/px2dp';

import Icon from 'react-native-vector-icons/Ionicons';
export default class App extends Component {
  
  state = {
    city: '选择',
    tabs: ['正在热映', '即将上映'],
    activeTab: '正在热映',
    xPosition: new Animated.Value(0)
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     var initialPosition = JSON.stringify(position);
    //     AlertIOS.alert('123', initialPosition);
    //   },
    //   (error) => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // ); 
  }


  loginWithFacebook = () => {
    console.log(1);
  }

  switchTab = (val) => {
    const { activeTab, tabs, xPosition } = this.state;
    if (val === activeTab) return;
    this.setState({
      activeTab: val
    });

    const offset = tabs.indexOf(val) * 75;

    Animated.timing(
      xPosition,
      {
        toValue: px2dp(offset),
      }
    ).start(); 
  }

  createTab = (tab) => {
    const { activeTab } = this.state;

    return (
      <TouchableOpacity onPress={() => this.switchTab(tab)}>
        <View style={styles.tab} key={tab}>
          <View style={styles.tabTextContainer}>
            <Text style={[styles.tabText, activeTab === tab ? styles.selectedText : null]}>123</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }


  render() {
    const { city, tabs, xPosition, activeTab } =  this.state;

    return (
      <View style={styles.mainView}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Icon.Button
            name="ios-arrow-down"
            color="#333"
            activeOpacity={1}
            backgroundColor="#ffffff"
            style={styles.button}
            iconStyle={styles.iconStyle} 
            onPress={this.loginWithFacebook}>
            <Text style={styles.iconButtonText}>{city}</Text>
          </Icon.Button>
          <View style={styles.tabs}>
            <View style={styles.tabContainer}>
              {
                tabs.map(this.createTab)
              }
            </View>
            <Animated.View
              style={[
                styles.tabLine,
                {
                  transform: [
                    {
                      translateX: this.state.xPosition
                    }
                  ]}
                ]} />
          </View>
          <Icon.Button
            name="ios-arrow-down"
            color="#333"
            activeOpacity={1}
            backgroundColor="#ffffff"
            style={[styles.button, { opacity: 0 }]}
            iconStyle={styles.iconStyle} 
            onPress={this.loginWithFacebook}>
            <Text style={styles.iconButtonText}>{city}</Text>
          </Icon.Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  iconStyle: {
    position: 'absolute',
    right: -5,
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: px2dp(40),
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1/PixelRatio.get(),
  },
  button: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  iconButtonText: {
    fontSize: 16
  },
  tabs: {
    height: px2dp(40),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center'
  },
  tabContainer: {
    flexDirection: 'row'
  },
  tab: {
    justifyContent: 'center',
    width: px2dp(75),
    height: px2dp(40),
    paddingLeft: px2dp(3),
    paddingRight: px2dp(3)
  },
  tabTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  selectedText: {
    color: '#FA5555',
  },
  tabText: {
    fontSize: 18,
  },
  tabLine: {
    backgroundColor: '#FA5555',
    height: px2dp(2),
    width: px2dp(75),
    alignSelf: 'flex-start'
  }
});
