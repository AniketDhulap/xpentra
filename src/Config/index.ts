import Config from 'react-native-config';

export enum ENVIRONMENTS {
	Dev = 'Dev',
}

export const ENV: ENVIRONMENTS | string | undefined = Config.ENV;

export const BASE_API = {
	URL: 'https://dummyjson.com',
};
