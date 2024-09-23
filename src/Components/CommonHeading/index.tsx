import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { headingStyles } from './style';

type HeadingType =
	| 'primary'
	| 'secondary'
	| 'paragraph'
	| 'default'
	| 'linkButton'
	| 'defaultLink'
	| 'mainHeading'
	| 'error';

interface ICommonHeadingProps {
	heading: string;
	headingType: HeadingType;
	color?: string;
	fontSize?: number;
	numberOfLine?: number;
	isTextCenter?: boolean;
}

const CommonHeading: FC<ICommonHeadingProps> = (props) => {
	const { heading, headingType, color, fontSize, isTextCenter } =
		props;

	function switchHeadingStyles() {
		switch (headingType) {
			case 'mainHeading':
				return headingStyles.mainHeading;
			case 'primary':
				return headingStyles.primaryHeading;
			case 'secondary':
				return headingStyles.secondaryHeading;
			case 'paragraph':
				return headingStyles.paragraph;
			case 'linkButton':
				return headingStyles.linkButton;
			case 'defaultLink':
				return headingStyles.defaultLink;
			case 'error':
				return headingStyles.error;
			default:
				return headingStyles.default;
		}
	}

	return (
		<View style={headingStyles.headingWrapper}>
			<Text
				style={[
					switchHeadingStyles(),
					color ? { color } : {},
					fontSize ? { fontSize } : {},
					isTextCenter ? { textAlign: 'center' } : {},
				]}>
				{heading}
			</Text>
		</View>
	);
};

export default CommonHeading;
