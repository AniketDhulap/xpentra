import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../Libs';
import { scale } from '../../Constants';

export const inputWrapperStyles = StyleSheet.create({
	container: {
		paddingVertical: 4,
	},
	input: {
		backgroundColor: COLORS.backgroundGray,
		borderRadius: RADIUS.extra_large,
		borderColor: COLORS.borderColor,
		borderWidth: 2,
		paddingHorizontal: SPACING.extra_large * 2,
		paddingVertical: SPACING.large * 1.15,
		marginVertical: SPACING.medium,
		color: COLORS.black,
		fontWeight: '400',
		fontSize: scale(13),
	},
});
