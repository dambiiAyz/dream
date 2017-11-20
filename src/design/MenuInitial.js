/**
 code by Dambii
 */
'use strict'

import { Record, List } from 'immutable'

var InitialState = Record({
  	index: 0,
	fetching: false,
	currentTab: 'profile',
	routes: [{
		key: 'question', 
		title: 'Мэдэгдэлүүд',
		icon: 'intercity',
		iconSelected: 'intercity',
		style: 'tabView',
		notificationCount: 0,
	}, { 
		key: 'notification', 
		title: 'Мэдэгдэлүүд',
		icon: 'notification',
		iconSelected: 'notification',
		style: 'tabView',
		notificationCount: 0,
	}, { 
		key: 'search', 
		title: 'Хайлт',
		icon: 'notification',
		iconSelected: 'notification',
		style: 'tabView',
		notificationCount: 0,
	}, { 
		key: 'offer', 
		title: 'Хайлт',
		icon: 'notification',
		iconSelected: 'notification',
		style: 'tabView',
		notificationCount: 0,
	}, {
		key: 'message', 
		title: 'Зурвас',
		icon: 'message',
		iconSelected: 'message',
		style: 'tabView',
		notificationCount: 0,
	}, {
		key: 'profile', 
		title: 'Миний хэсэг',
		icon: 'profile',
		iconSelected: 'profile',
		style: 'tabView',
		notificationCount: 0,
	}]
})

export default InitialState
