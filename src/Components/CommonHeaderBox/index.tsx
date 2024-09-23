import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { scale } from '../../Constants';
import CommonHeading from '../CommonHeading';
import RoundButton from '../CommonRoundButton';
import { RootStackParamList } from '../NavigationComponent';
import { commonHeadingStyles } from './style';

interface ICommonHeader {
	heading: string;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const BACK_ICON = require('../../Assets/back.png');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MENU_ICON = require('../../Assets/menu.png');

const CommonHeaderBox: FC<ICommonHeader> = ({ heading }) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	function handleGoBack() {
		navigation.goBack();
	}
	
	return (
		<View style={commonHeadingStyles.headingWrapper}>
			<RoundButton onClick={handleGoBack} icon={BACK_ICON} />
			<CommonHeading
				heading={heading}
				headingType="mainHeading"
				fontSize={scale(15) * 1.2}
			/>
			<RoundButton onClick={() => {}} icon={MENU_ICON} />
		</View>
	);
};

export default CommonHeaderBox;
