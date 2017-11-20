'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TimerMixin from 'react-timer-mixin'
import reactMixin from 'react-mixin'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MenuComponent from '../components/MenuComponent'

function mapStateToProps (state) {
  return {
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
   }
}

class MenuView extends Component {
  render() {
    return (
      <MenuComponent {...this.props} />
    );
  }
}

const styles = StyleSheet.create({

});

reactMixin(MenuView.prototype, TimerMixin)
export default connect(mapStateToProps, mapDispatchToProps)(MenuView)