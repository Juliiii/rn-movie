import {
	Dimensions,
	PixelRatio
} from 'react-native';

const { width, height } = Dimensions.get('window');

const red = '#ef6967';
const white = '#fafafa';
const lightWhite = '#f8f8f8';
const llightWhite = '#f5f5f5';
const borderColor = '#e5e5e5';
const orange = '#ffb74d';
const blue = '#0091ea';
const grey = '#9d9d9d';
const yellow = '#ffeb3b';


const border1px = 1 / PixelRatio.get();

const msmFontSize = 12;
const smFontSize = 14;
const mdFontSize = 16;
const lgFontSize = 18;
const llgFontSize = 20;


export {
	width as WW,
	height as WH,
	red,
	white,
	borderColor,
	lightWhite,
	llightWhite,
	orange,
	blue,
	msmFontSize,
	smFontSize,
	mdFontSize,
	lgFontSize,
	grey,
	yellow,
	border1px,
	llgFontSize
};
