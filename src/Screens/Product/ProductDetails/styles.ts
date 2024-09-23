import { StyleSheet } from 'react-native';
import { COLORS, DIMENTION, RADIUS, SPACING } from '../../../Libs';

export const style = StyleSheet.create({
	media: {
		height: DIMENTION.HEIGHT * 0.4,
		backgroundColor: COLORS.secondary,
		borderRadius: RADIUS.medium,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 9,
		},
		shadowOpacity: 0.22,
		shadowRadius: 10.24,
		elevation: 10,
		margin: SPACING.extra_large,
		borderColor: COLORS.borderColor,
		borderWidth: 3,
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		backgroundColor: COLORS.secondary,
		borderRadius: RADIUS.medium,
	},
	container: {
		padding: 16,
	},
	infoBlock: {
		marginBottom: 12,
	},
	heading: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333',
	},
	value: {
		fontSize: 14,
		color: '#666',
	},

	heartIcon: {
		backgroundColor: COLORS.backgroundGray,
		position: 'absolute',
		right: 7,
		top: 7,
		borderRadius: RADIUS.extra_large,
		borderColor: COLORS.orange,
		borderWidth: 0.5,
		width: 35,
		height: 35,
		alignItems: 'center',
		justifyContent: 'center',
	},

	productHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderBottomColor: COLORS.borderColor,
		borderBottomWidth: 2,
		paddingVertical: SPACING.small,
		paddingHorizontal: SPACING.large,
	},

	productDetails: {
		marginVertical: SPACING.extra_large,
		padding: SPACING.small,
		borderRadius: 8,
		backgroundColor: COLORS.backgroundGray,
		paddingVertical: SPACING.extra_large,
		paddingHorizontal: SPACING.large,
	},

	detailRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: SPACING.small,
	},

	buttonWrapper: {
		borderTopColor: COLORS.borderColor,
		borderTopWidth: 2,
		borderBottomColor: COLORS.borderColor,
		borderBottomWidth: 2,
		paddingVertical: SPACING.small,
		flex: 1,
		paddingHorizontal: SPACING.large,
	},

	descriptionSection: {
		marginTop: SPACING.extra_large,
		borderTopColor: COLORS.borderColor,
		borderTopWidth: 2,
		borderBottomColor: COLORS.borderColor,
		borderBottomWidth: 2,
		paddingVertical: SPACING.small,
		paddingHorizontal: SPACING.large,
	},
	additionalInfoSection: {
		borderBottomColor: COLORS.borderColor,
		borderBottomWidth: 2,
		paddingVertical: SPACING.small,
		paddingHorizontal: SPACING.large,
	},

	reviewsSection: {
		borderBottomColor: COLORS.borderColor,
		borderBottomWidth: 2,
		paddingVertical: SPACING.small,
		paddingBottom: SPACING.extra_large,
		paddingHorizontal: SPACING.large,
	},
});
