import {playMode} from 'common/js/config';

const state = {
	singer: {},
	playing: false,
	fullScreen: false,
	playlist: [],
	sequenceList: [],
	mode: playMode.sequence,
	currentInde: -1
};

export default state;