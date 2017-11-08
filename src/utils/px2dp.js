import {
	Dimensions
} from 'react-native';

const uiheight = 640;
const physicialheight = Dimensions.get('window').height;

function px2dp(px) {
	return physicialheight * px/ uiheight;
}


export {
	px2dp
};
