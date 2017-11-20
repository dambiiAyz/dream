export const layout = {
	centerBetween: {
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	centerStart: {
		justifyContent: 'flex-start',
		alignItems: 'center',
	},

	startCenter: {
		alignItems: 'flex-start',
		justifyContent: 'center',
	},

	centerEnd: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	endCenter: {
		alignItems: 'flex-end',
		justifyContent: 'center',
	},

	centerAround: {
		justifyContent: 'space-around',
		alignItems: 'center',	
	},

	centerCenter: {
		justifyContent: 'center',
		alignItems: 'center',	
	},

	startCenter: {
		justifyContent: 'flex-start',
		alignItems: 'center',		
	},

	endEnd: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',		
	},

	row: {
		flexDirection: 'row'
	},

	h1: {
		fontSize: 32,
		fontWeight: '800',
	},

	h2: {
		fontSize: 26,
		fontWeight: '800',	
	},

	h3: {
		fontSize: 18,
		fontWeight: '600',
	},
	
	bold: {
		fontFamily: 'Helvetica_Bold',
	}

}

export const fonts = {
	FONT_REGULAR: 'Helvetica_Regular',
	light: 'Helvetica_Light',
	FONT_BOLD: 'Helvetica_Bold',
	regular: 'Helvetica_Regular',
	bold: 'Helvetica_Bold',
	heavy: 'Helvetica_Heavy',
	//FONT_HEAVY: 'HelveticaNeue-Heavy',
}

var themes = [{
	name: 'Dark Purple',
	variables: {
		BRAND_PRIMARY: "#2b1987",
		//BRAND_COLOR: "#ef6856",
		BRAND_COLOR: "#7f268f",
		//BRAND_COLOR: "#2b1987",
		BRAND_SECONDARY: "#0077dd",
		BRAND_BLACK: '#3e474f',
		BRAND_WHITE: '#fff',
		BRAND_GRAY: '#bebebe',
		BRAND_SUBCOLOR: '#EFEFEF',
		BRAND_GREEN: "#66cc22",

		TEXT_COLOR: "#3e474f",
		BACKGROUND_COLOR: "#fff",
		BACKGROUND_BLACK: "#3e474f",
	}
}, {
	name: 'Dark Brown',
	variables: {
		//BRAND_PRIMARY: "#532568",
		BRAND_PRIMARY: "#e58a39",
		//BRAND_PRIMARY: "#c63274",
		//BRAND_COLOR: "#ef6856",
		BRAND_COLOR: "#e0622e",
		//BRAND_COLOR: "#fb7a5a",
		//BRAND_COLOR: "#c63274",
		//BRAND_COLOR: "#2b1987",
		BRAND_SECONDARY: "#0077dd",
		BRAND_BLACK: '#58595b',
		BRAND_WHITE: '#fff',
		BRAND_GRAY: '#bebebe',
		BRAND_SUBCOLOR: '#EFEFEF',
		BRAND_GREEN: "#66cc22",

		TEXT_COLOR: "#58595b",
		BACKGROUND_COLOR: "#fff",
		BACKGROUND_BLACK: "#3e474f",	
	}
}, {
	name: 'Test',
	variables: {
		BRAND_PRIMARY: "#66cc22",
		BRAND_COLOR: "#66cc22",
		//BRAND_COLOR: "#f45b43",
		//BRAND_COLOR: "#2b1987",
		BRAND_TEST: "#fb7a5a",
		BRAND_SECONDARY: "#0077dd",
		BRAND_BLACK: '#3e474f',
		BRAND_WHITE: '#fff',
		BRAND_GRAY: '#bebebe',
		BRAND_SUBCOLOR: '#EFEFEF',
		BRAND_GREEN: "#66cc22",

		TEXT_COLOR: "#3e474f",
		BACKGROUND_COLOR: "#fff",
		BACKGROUND_BLACK: "#3e474f",	
	}
}]

var variables = themes[1].variables

/*var variables = {

	//Theme Dark
	/*BRAND_PRIMARY: "#ff3165",
	BRAND_COLOR: "#ef6856",
	BRAND_SECONDARY: "#07385a",
	BRAND_BLACK: '#3e474f',
	BRAND_GRAY: '#bebebe',
	BRAND_SUBCOLOR: '#EFEFEF',
	BRAND_GREEN: "#66cc22",

	TEXT_COLOR: "#FFF",
	BACKGROUND_COLOR: "#3e474f",

	//Theme White
	//BRAND_PRIMARY: "#ff3165",
	//BRAND_PRIMARY: "#7f268f",
	BRAND_PRIMARY: "#2b1987",
	//BRAND_COLOR: "#ef6856",
	BRAND_COLOR: "#7f268f",
	//BRAND_COLOR: "#2b1987",
	BRAND_SECONDARY: "#0077dd",
	BRAND_BLACK: '#3e474f',
	BRAND_WHITE: '#fff',
	BRAND_GRAY: '#bebebe',
	BRAND_SUBCOLOR: '#EFEFEF',
	BRAND_GREEN: "#66cc22",

	TEXT_COLOR: "#3e474f",
	BACKGROUND_COLOR: "#fff",
	BACKGROUND_BLACK: "#3e474f",

	
	
	//TEXT_COLOR: "##",

	//BRAND_COLOR: "#FF8812",
	
	//BRAND_COLOR: "#fd3e0a",
	//BRAND_COLOR: "#59D6E8",
	//BRAND_COLOR: "#66cc22",
	//BRAND_COLOR: "#50C0D0",
	//BRAND_COLOR: "#4053B2",
	//BRAND_COLOR: "#ED1C24",
	//BRAND_COLOR: "#6699CC",
	//BRAND_COLOR: '#BA68C8',
	//BRAND_COLOR: '#5296A5',
	//BRAND_COLOR: '#FE5F55',
	//BRAND_COLOR: '#DB2B39',
	//BRAND_COLOR: '#FE7F2D',

	//BRAND_COLOR: "#5fcf80", //UNREAD
	
	//BRAND_COLOR: "",
	
	//BRAND_SECONDARY: "#EA6B00",
	//BRAND_SECONDARY: "#3f8abf",
	//BRAND_SECONDARY: "#619B8A",

	

	//BRAND_BLACK: '#495867',
	
	//BRAND_BLACK: '#3e474f',
	
	//BRAND_SUBCOLOR: '#F0CEA0',
	



	
	
}*/

export default variables