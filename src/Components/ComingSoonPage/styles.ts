import { StyleSheet } from 'react-native';
import { SPACING } from '../../Libs';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		width: '100%',
		alignItems: 'center',
		paddingTop: SPACING.extra_large,
	},
	button: {
		paddingVertical: SPACING.extra_large,
	},
});

export default styles;
