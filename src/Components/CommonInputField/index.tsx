import React, { FC } from 'react';
import { InputModeOptions, TextInput, View } from 'react-native';
import CommonHeading from '../CommonHeading';
import { inputWrapperStyles } from './style';
import { COLORS } from '../../Libs';

interface ICommonInputFieldProps {
	label: string;
	inputMode?: InputModeOptions;
	action?: React.ReactNode;
	editable?: boolean;
	value: any;
	multiline?: boolean;
	maxLength?: number;
	numberOfLines?: number;
	placeholder: string;
	secureTextEntry?: boolean;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
	hideLabel?: boolean;
	onChangeText: (value: string) => void;
}
const CommonInputField: FC<ICommonInputFieldProps> = (props) => {
	const {
		inputMode,
		label,
		editable = true,
		value,
		maxLength = 40,
		multiline = false,
		numberOfLines = 1,
		placeholder,
		secureTextEntry,
		autoCapitalize,
		hideLabel,
		onChangeText,
	} = props;

	return (
		<View style={inputWrapperStyles.container}>
			{!hideLabel ? (
				<CommonHeading heading={label} headingType="secondary" />
			) : null}

			<TextInput
				inputMode={inputMode}
				editable={editable}
				multiline={multiline}
				numberOfLines={numberOfLines}
				maxLength={maxLength}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
				style={inputWrapperStyles.input}
				secureTextEntry={secureTextEntry}
				placeholderTextColor={COLORS.secondaryTextColor}
				autoCapitalize={autoCapitalize}
			/>
		</View>
	);
};

export default CommonInputField;
