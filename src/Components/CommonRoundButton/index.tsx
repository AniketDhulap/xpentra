import React, { FC } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface IRoundButton {
	onClick: () => void;
	icon: ImageSourcePropType;
}
const RoundButton: FC<IRoundButton> = ({ onClick, icon }) => {
	return (
		<TouchableOpacity
			onPress={onClick}
			style={{
				height: 40,
				width: 40,
				borderRadius: 100,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Image
				source={icon}
				style={{
					height: 24,
					width: 24,
					resizeMode: 'contain',
				}}
			/>
		</TouchableOpacity>
	);
};

export default RoundButton;
