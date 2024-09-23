import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../Libs';

const styles = StyleSheet.create({
	navigationWrapper: {
		width: '100%',
	},
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 60,
		backgroundColor: COLORS.white,
		width: '100%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16,
		elevation: 24,
		paddingHorizontal: SPACING.large,
	},
	navItemWrapper: {
		height: 60,
		width: 60,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	icon: {
		height: 24,
		width: 24,
		resizeMode: 'contain',
	},
	activeIndicator: {
		height: 3,
		backgroundColor: COLORS.black,
		width: 10,
		borderRadius: RADIUS.large,
		position: 'absolute',
		bottom: 12,
	},
});

export default styles;
