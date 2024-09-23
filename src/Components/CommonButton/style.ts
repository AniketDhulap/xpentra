import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../Libs';
import { scale } from '../../Constants';

export const buttonStyles = StyleSheet.create({
	buttonWrapper: {
		paddingVertical: SPACING.large,
	},
	outlinedButton: {
		backgroundColor: COLORS.backgroundWhite,
		padding: SPACING.extra_large * 1.7,
		borderRadius: RADIUS.extra_large,
		borderWidth: 2,
		borderColor: COLORS.buttonBorder,
	},
	filledButton: {
		backgroundColor: COLORS.primary,
		padding: SPACING.extra_large * 1.7,
		borderRadius: RADIUS.extra_large,
	},
	button: {
		textAlign: 'center',
	},
	outlinedText: {
		color: COLORS.textColor,
		fontWeight: '600',
		fontSize: scale(14),
	},
	filledText: {
		color: COLORS.backgroundWhite,
		fontWeight: '600',
		fontSize: scale(14),
	},
});
