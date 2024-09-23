import React, { FC } from "react";
import { ScrollView } from "react-native";
import { wrapperStyles } from "./style";

interface ICommonWrapperProps {
	children: React.ReactNode;
}
const CommonWrapper: FC<ICommonWrapperProps> = ({ children }) => {
	return <ScrollView showsVerticalScrollIndicator={false} scrollEnabled style={wrapperStyles.container}>{children}</ScrollView>;
};

export default CommonWrapper;
