import React, { FC } from 'react';
import { Image, View } from 'react-native';
import CommonButton from '../CommonButton';
import CommonHeading from '../CommonHeading';
import { style } from './styles';

interface IErrorComponent {
	onReload: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ERROR_IMAGE = require('../../Assets/error.png');

const ErrorComponent: FC<IErrorComponent> = ({ onReload }) => {
	return (
		<View style={style.forgotWrapper}>
			<View style={style.media}>
				<Image style={style.image} source={ERROR_IMAGE} />
			</View>
			<View style={style.center}>
				<CommonHeading
					heading="Oops! Something went wrong. "
					headingType="secondary"
				/>
				<CommonHeading
					heading="Failed to fetch data from the server. Please try again later."
					headingType="default"
				/>

				<View style={[style.viewWrapper]}>
					<CommonButton
						buttonText="Reload Again"
						onPress={() => {
							onReload();
						}}
						varient="filled"
					/>
				</View>
			</View>
		</View>
	);
};

export default ErrorComponent;
