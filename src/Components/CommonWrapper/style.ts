import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../Libs';

export const wrapperStyles = StyleSheet.create({
	container: {
		paddingVertical: SPACING.small,
		paddingHorizontal: SPACING.extra_large * 1.25,
		backgroundColor: COLORS.backgroundWhite,
		height: '100%'
	}
});
