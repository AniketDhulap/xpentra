import { StyleSheet } from 'react-native';
import { COLORS, DIMENTION, SPACING } from '../../Libs';

export const styles = StyleSheet.create({
	productScreenWrapper: {
		backgroundColor: COLORS.white,
		height: DIMENTION.HEIGHT,
		flex: 1,
		paddingHorizontal: 5,
	},
	productListWrapper: {
		flex: 1,
	},
	headerWrapper: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		padding: SPACING.small,
	},
	logo: {
		resizeMode: 'contain',
		width: 110,
		height: 30,
	},
	menuIconWrapper: {
		height: 40,
		width: 40,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuIcon: {
		height: 24,
		width: 24,
		resizeMode: 'contain',
	},
	searchWrapper: {
		justifyContent: 'center',
		width: '100%',
	},
	loadingMoreContainer: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	loadMoreButtonWrapper: {
		alignItems: 'center',
	},
	loadMoreButton: {
		width: '40%',
		backgroundColor: COLORS.primary,
		paddingVertical: 8,
		marginBottom: 3,
	},
	container: {
		flex: 1,
		padding: 10,
	},
	toggleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	toggleLabel: {
		fontSize: 16,
	},
});
