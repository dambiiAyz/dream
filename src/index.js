'use strict';

import React, { Component } from 'react';

import { Router, Scene, ActionConst } from 'react-native-router-flux'
import { Provider } from 'react-redux'

import store from "./store"

import MenuView from './design/containers/MenuView'

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class index extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router sceneStyle={{ backgroundColor: 'white' }}>
              <Scene key='root' hideNavBar>
                  
                  <Scene key="MenuView"
                     title="MenuView"
                     component={MenuView}
                     initial
                  />

              </Scene>
          </Router>
      </Provider>
                 
    );
  }
}

const styles = StyleSheet.create({

});


export default index;