'use strict';

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import variables, { layout } from '../../style/variables'
import TabNavigator from '../../components/react-native-tab-navigator'
import Badge from 'react-native-smart-badge'
import Icon from 'react-native-vector-icons/Ionicons'

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const tabHeight = 60
const badgeSize = 10

class MenuComponent extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	selectedTab: 'home',
	  	homeView: 'homee',
	  	profileView: 'pro',
	  	currentTab: 'message'
	  };

	}

  render() {
  	let { homeView, profileView } =this.state

    return (
      <View style={styles.container}>
      	 <LinearGradient colors={['#18273d', '#18273d', '#62304e']}
      	 				 locations={[0,1,1]}
      	 				 style={[layout.centerCenter, styles.linearGrandient]}
      	 				 start={{x: 0, y: 0 }} 
                         end={{x: 1, y: 1}}>
      	 	<Icon name="md-calendar" size={18} color="white"  />
			 
      	 	<Text style={styles.buttonText}>
			    Welcome to dambii
			</Text>
			   	
		</LinearGradient>
	
			<TabNavigator>
			  <TabNavigator.Item
			  	key={1}
			    selected={this.state.selectedTab === 'home'}
			    title="Home"
			    badgeText="100"
			    renderIcon={() => 
			    	//<View>	
			    		<Icon name="md-radio-button-on" size={17} color={"#cfcfcf"}  />
			    	//</View>
			    	}
			    renderSelectedIcon={() => 
			    	//<View>	
			    		<Icon name="md-radio-button-on" size={17} color={variables.BRAND_COLOR}  />
			    //	</View>
			    	}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			   	<Text> bla home </Text>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	key={2}
			    selected={this.state.selectedTab === 'list'}
			    title="List"
			    renderIcon={() => 
			    	<View>	
			    		<Icon name="md-radio-button-on" size={17} color={variables.BRAND_COLOR}  />
			    	</View>
			    	}
			    renderSelectedIcon={() => 
			    	<View>	
			    		<Icon name="md-radio-button-on" size={17} color={variables.BRAND_COLOR}  />
			    	</View>
			    	}
			    onPress={() => this.setState({ selectedTab: 'list' })}>
			   	<Text> bla bla </Text>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	key={3}
			    selected={this.state.selectedTab === 'profile'}
			    title="Profile"
			    // renderBadge=
    			// {
    			// 	() => <Badge minWidth={badgeSize} 
			    //              minHeight={badgeSize} 
			    //              extraPaddingHorizontal={4}
			    //              textStyle={{ color: '#fff', fontSize: 11}} 
			    //              style={styles.badget}>
			    //           	<Text> lllflf </Text>
			    //       </Badge>
			    //   }
			    renderIcon={() => 
			    	<View>	
			    		<Icon name="md-radio-button-on" size={17} color={variables.BRAND_COLOR}  />
			    	</View>
			    	}
			    renderSelectedIcon={() => 
			    	<View>	
			    		<Icon name="md-radio-button-on" size={17} color={variables.BRAND_COLOR}  />
			    	</View>
			    	}
			    onPress={() => this.setState({ selectedTab: 'profile' })}>
			    <Text> bla pro </Text>
			  </TabNavigator.Item>
			</TabNavigator>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	linearGrandient: {
		flex: 1,
		borderWidth: 0
	},
	buttonText: {
		borderWidth: 0,
		color: variables.BRAND_COLOR //'#4d6381'
	},
	
});


export default MenuComponent;