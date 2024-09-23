import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../Libs";
import { scale } from "../../Constants";

export const commonHeadingStyles = StyleSheet.create({
	headingWrapper: {
		flexDirection: "row",
		paddingVertical: SPACING.large,

		backgroundColor: COLORS.backgroundWhite,
		alignItems: "center",
		justifyContent:'space-between'
	},
	backButton: {
		paddingHorizontal: SPACING.extra_large,
		paddingVertical: SPACING.small
	},
	backButtonIcon: {
		color: COLORS.textColor,
		fontSize: scale(14) * 1.5
	}
});
