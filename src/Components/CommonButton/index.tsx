import React, { FC } from 'react';
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	View,
	StyleProp,
	ViewStyle,
	TextStyle,
} from 'react-native';
import { buttonStyles } from './style';
import { COLORS } from '../../Libs';

type CommonButton = 'outlined' | 'filled';

interface ICommonButtonProps {
	buttonText: string;
	onPress: () => void;
	varient: CommonButton;
	loading?: boolean;
	disabled?: boolean;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const CommonButton: FC<ICommonButtonProps> = (props) => {
	const {
		buttonText,
		onPress,
		varient,
		loading,
		disabled,
		buttonStyle,
		textStyle,
	} = props;

	return (
		<View style={buttonStyles.buttonWrapper}>
			<TouchableOpacity
				onPress={onPress}
				style={[
					varient === 'filled'
						? buttonStyles.filledButton
						: buttonStyles.outlinedButton,
					buttonStyle,
				]}
				disabled={disabled || loading}>
				{loading ? (
					<ActivityIndicator color={COLORS.primary} size={32} />
				) : (
					<Text
						style={[
							buttonStyles.button,
							varient === 'filled'
								? buttonStyles.filledText
								: buttonStyles.outlinedText,
							textStyle,
						]}>
						{buttonText}
					</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default CommonButton;
