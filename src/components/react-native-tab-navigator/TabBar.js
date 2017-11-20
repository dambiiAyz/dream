'use strict';

import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native'

import Layout from './Layout'
import LinearGradient from 'react-native-linear-gradient'
import variables from '../../style/variables'

export default class TabBar extends React.Component {
  static propTypes = {
    ...Animated.View.propTypes,
    shadowStyle: View.propTypes.style,
  };

  render() {
    return (
      <Animated.View {...this.props} style={[styles.container, this.props.style]}>
        {/*<LinearGradient colors={[variables.BRAND_COLOR, variables.BRAND_PRIMARY]}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flex: 1,
                        }}
                        start={{x: 1, y: 1 }} 
                        end={{x: 0, y: 0}}
        >*/}
          {this.props.children}
          <View style={[styles.shadow, this.props.shadowStyle]} />
        {/*</LinearGradient>*/}
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Layout.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: Layout.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? 0 : -Layout.pixel,
  },
});
