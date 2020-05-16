'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const POSITION_MAP = {
    l: 'left',
    r: 'right',
    t: 'top',
    b: 'bottom'
};

const reverseString = str => str.split('').reverse().join('');
const normalizePos = pos => (pos.startsWith('t') || pos.startsWith('b')) ? reverseString(pos) : pos;
const extractPos = pos => pos.split('').map(p => POSITION_MAP[p]);

const transformStyle = ({ x, y }) => `translate(${x}px, ${y}px)`;
  
const relativeDiff = ({ a, aPos = 'lt', b, bPos = 'lt' }) => {
	aPos = extractPos(normalizePos(aPos));
	bPos = extractPos(normalizePos(bPos));
  
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	
	const { e: translateX, f: translateY } = new DOMMatrix(a.style.transform);
  
	return {
	  x: bRect[bPos[0]] - aRect[aPos[0]] + translateX,
	  y: bRect[bPos[1]] - aRect[aPos[1]] + translateY
	}
};
  
const matchPosition = ({ a, aPos = 'lt', b, bPos = 'lt' }) => {
	const diff = relativeDiff({ a, aPos, b, bPos });
	const style = transformStyle(diff);
	a.style.setProperty('transform', style);
};

exports.matchPosition = matchPosition;
exports.relativeDiff = relativeDiff;
exports.transformStyle = transformStyle;
