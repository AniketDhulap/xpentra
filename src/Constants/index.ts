import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const shortDimension = width < height ? width : height;

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

const MAX_FONT_SIZE = 18;
const MIN_FONT_SIZE = 12;

export const scale = (size: number) => {
	const fontSize = (shortDimension / guidelineBaseWidth) * size;
	if (fontSize > MAX_FONT_SIZE) return MAX_FONT_SIZE;

	if (fontSize < MIN_FONT_SIZE) return MIN_FONT_SIZE;

	return fontSize;
};
