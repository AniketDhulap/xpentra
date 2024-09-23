import { StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../../Libs';

export const listItemStyles = StyleSheet.create({
	listItemWrapper: {
		backgroundColor: COLORS.backgroundGray,
		marginVertical: SPACING.medium,
		marginHorizontal: SPACING.small * 0.25,
		borderRadius: RADIUS.extra_large,
		borderColor: COLORS.backgroundGray,
		borderWidth: 5,
	},
	listItem: {
		flexDirection: 'row',
		flex: 1,
		height: 120,
	},
	listImage: {
		flex: 0.3,
		height: '100%',
		borderRadius: RADIUS.large,
		backgroundColor: COLORS.secondary,
		objectFit: 'cover',
		minHeight: 75,
	},
	listData: {
		flex: 0.7,
		paddingLeft: SPACING.extra_large,
		marginTop: SPACING.extra_large,
	},
	skeletonContainer: {
		backgroundColor: COLORS.backgroundGray,
		marginVertical: SPACING.medium,
		marginHorizontal: SPACING.small * 0.25,
		borderRadius: RADIUS.extra_large,
		borderColor: COLORS.backgroundGray,
		borderWidth: 1,
		padding: SPACING.small,
		height: 130,
	},
	skeletonHeading: {
		marginBottom: SPACING.extra_large,
	},
	skeletonSubheading: {
		marginBottom: SPACING.extra_large,
	},
	favIconWrapper: {
		backgroundColor: COLORS.backgroundGray,
		position: 'absolute',
		right: 5,
		bottom: 5,
		borderRadius: RADIUS.extra_large,
		borderColor: COLORS.orange,
		borderWidth: 0.5,
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
