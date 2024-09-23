import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../Libs';
import { scale } from '../../Constants';

export const headingStyles = StyleSheet.create({
	headingWrapper: {
		paddingVertical: 4,
	},
	primaryHeading: {
		color: COLORS.textColor,
		fontSize: scale(16) * 1.7,
		fontWeight: '700',
	},
	mainHeading: {
		color: COLORS.textColor,
		fontSize: scale(16) * 1.5,
		fontWeight: '700',
	},
	secondaryHeading: {
		color: COLORS.textColor,
		fontSize: scale(15),
		fontWeight: '500',
		paddingLeft: SPACING.extra_small,
	},
	linkButton: {
		color: COLORS.linkTextColor,
		fontSize: scale(12),
		fontWeight: '500',
	},
	paragraph: {
		color: COLORS.secondaryTextColor,
		fontSize: scale(13),
		fontWeight: '500',
	},
	default: {
		color: COLORS.textColor,
		fontSize: scale(13),
	},
	defaultLink: {
		color: COLORS.primary,
		fontSize: scale(13),
	},
	error: {
		color: COLORS.errorColor,
		fontSize: scale(15),
		fontWeight: '500',
	},
});
