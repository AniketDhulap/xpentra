import { StyleSheet } from 'react-native';
import { DIMENTION, SPACING } from '../../Libs';

export const style = StyleSheet.create({
	forgotWrapper: {
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100%',
	},
	media: {
		height: DIMENTION.HEIGHT * 0.2,
		paddingHorizontal: SPACING.extra_large,
	},
	viewWrapper: {
		paddingVertical: SPACING.extra_large,
		width: '50%',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
	center: {
		alignItems: 'center',
	},
});
