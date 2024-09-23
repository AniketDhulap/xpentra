import { Dimensions } from 'react-native';

export const COLORS = {
	primary: '#a8baff',
	secondary: '#d1e7fe',
	textColor: '#000106',

	backgroundGray: '#f6f5f9',
	backgroundWhite: '#fff',
	secondaryTextColor: '#adadb5',
	borderColor: '#f6f5fa',
	orange: '#f8dab8',
	yellow: '#fff2be',
	pink: '#fee7ef',

	linkTextColor: '#6D6F73',
	buttonBorder: '#ABABB1',
	placeholderColor: '#d0d3db',
	errorColor: '#b00020',
	white: '#fff',
	black: '#121526',
};

export const WIDTHS = {
	WIDTH_PIXELS: 1024,
};

export const DIMENTION = {
	WIDTH: Dimensions.get('window').width,
	HEIGHT: Dimensions.get('window').height,
	FONTSCALE: Dimensions.get('window').fontScale,
	SCALE: Dimensions.get('window').scale,
};

export const SPACING = {
	extra_small: 2,
	small: 4,
	medium: 6,
	large: 8,
	extra_large: 10,
};
export const RADIUS = {
	extra_small: 5,
	small: 10,
	medium: 15,
	large: 20,
	extra_large: 25,
};
