import { keyId, keyValues } from './symbols.js';

const keyboardOption = {
	lang: 'en',
	shift: false,
	caps: false,
}




const body = document.querySelector('body');
// create wrapper + style
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
// create header + style
const header = document.createElement('header');
header.classList.add('header');
//create main + style
const main = document.createElement('main');
main.classList.add('main');

// add header and main to body
body.append(wrapper);
wrapper.append(header);
wrapper.append(main);


// create headerRow - container + style
const headerRow = document.createElement('div');
headerRow.classList.add('container');
headerRow.classList.add('header__row');
//create headerTitle
const headerTitle = document.createElement('h1');
headerTitle.innerText = 'RSS Batcomputer';
headerTitle.classList.add('header__title');
headerTitle.classList.add('title');
// contain header
header.append(headerRow);
headerRow.append(headerTitle);


// create mainContainer + style
const mainContainer = document.createElement('div');
mainContainer.classList.add('container');
// create screen + style
const mainScreen = document.createElement('div');
mainScreen.classList.add('screen');
// create screen textarea
const screenTextarea = document.createElement('textarea');
screenTextarea.setAttribute('name', 'screen');
screenTextarea.setAttribute('id', 'screen');
screenTextarea.setAttribute('cols', '60');
screenTextarea.setAttribute('rows', '8');
screenTextarea.setAttribute('autofocus', true);
// screenTextarea.setAttribute('readonly', true);
screenTextarea.setAttribute('placeholder', 'Welcome mr.Wayne!');
// contain main => mainScren
main.append(mainContainer);
mainContainer.append(mainScreen);
mainScreen.append(screenTextarea);

// create keyboard
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
// create keyboardBody
const keyboardBody = document.createElement('div');
keyboardBody.classList.add('keyboard__body');
// create keyBoardRows

for (let i = 0; i < 5; i++) {
	// create row
	let row = document.createElement('div');
	row.classList.add('keyboard__row');
	//create buttons
	let j = 0;
	switch (i) {
		case 0:
			while (j < 14) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.setAttribute('id', keyId[i][j]);
				row.append(btn);
				j++
			}
			break;
		case 1:
			while (j < 15) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.setAttribute('id', keyId[i][j]);
				if (j !== 14 && j !== 0) {
					btn.classList.add('capsable');
				}
				if (j === 0) {
					btn.classList.add('tab');
				} else if (j === 14) {
					btn.classList.add('del');
					btn.classList.add('not-square-btn');
				} else {
					btn.classList.add('capsable');
				}
				row.append(btn);
				j++
			}
			break;
		case 2:
			while (j < 13) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.setAttribute('id', keyId[i][j]);
				if (j !== 12 && j !== 0) {
					btn.classList.add('capsable');
				}
				row.append(btn);
				j++
			}
			break;
		case 3:
			while (j < 13) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.setAttribute('id', keyId[i][j]);
				if (j !== 0 && j < 11) {
					btn.classList.add('capsable');
				}
				row.append(btn);
				j++
			}
			break;
		case 4:
			while (j < 9) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.setAttribute('id', keyId[i][j]);
				row.append(btn);
				j++
			}
			break;
		default:
			break;
	}
	keyboardBody.append(row);
}

// add keyboardBody => keyboard => mainContainer
keyboard.append(keyboardBody);
mainContainer.append(keyboard);

// create keyboardInfo
const keyboardInfo = document.createElement('div');
keyboardInfo.classList.add('keyboard-info');
// create language-buttons
const languageButtons = document.createElement('div');
languageButtons.classList.add('language-buttons');
const buttonEn = document.createElement('button');
buttonEn.innerText = 'EN';
buttonEn.classList.add('button-en');
buttonEn.classList.add('lang-btn');
const buttonRu = document.createElement('button');
buttonRu.innerText = 'RU';
buttonRu.classList.add('button-ru');
buttonRu.classList.add('lang-btn');

// add keyboardInfo => keyboard
keyboard.after(keyboardInfo);
keyboardInfo.append(languageButtons);
languageButtons.append(buttonEn);
buttonEn.after(buttonRu);

// create text 
const text1 = document.createElement('p');
text1.classList.add('text');
const coloredText1 = document.createElement('span');
coloredText1.innerText = 'CTRL + ALT';
coloredText1.classList.add('colored-text');
text1.innerText = 'Чтобы сменить язык используйте кнопки или комбинацию из двух клавиш ';
text1.append(coloredText1)
const text2 = document.createElement('p');
text2.classList.add('text');
const coloredText2 = document.createElement('span');
coloredText2.innerText = 'Windows';
coloredText2.classList.add('colored-text');
text2.innerText = 'Клавиатура создана в ОС ';
text2.append(coloredText2);

// add text => keyboard-info
languageButtons.after(text1)
text1.after(text2)


// add event to keydown/keyup

screenTextarea.addEventListener('focus', () => {
	// отменять ввод с клавиатуры

})


//! ----------------------------
let allButtons = document.querySelectorAll('.keyboard__btn');

const showButtonValue = function (buttons, values, options) {
	for (let button of buttons) {
		let defaultValue = values[button.id][options.lang]['default'];
		let capsValue = values[button.id][options.lang]['caps'];
		let shiftValue = values[button.id][options.lang]['shift'];
		button.innerText = defaultValue;
		if (options.caps && capsValue) {
			button.innerText = capsValue;
		}
		if (options.shift) {
			button.innerText = shiftValue;
		}
	}
}
showButtonValue(allButtons, keyValues, keyboardOption);


// button idintifier
const Delete = document.querySelector('#Delete');
const Space = document.querySelector('#Space');
const Backspace = document.querySelector('#Backspace');
const ShiftLeft = document.querySelector('#ShiftLeft');
const ShiftRight = document.querySelector('#ShiftRight');
const CapsLock = document.querySelector('#CapsLock');
const CtrlLeft = document.querySelector('#ControlLeft');
const CtrlRight = document.querySelector('#ControlRight');
const AltLeft = document.querySelector('#AltLeft');
const AltRight = document.querySelector('#AlRight');
const Meta = document.querySelector('#MetaLeft');
const ArrowLeft = document.querySelector('#ArrowLeft');
const ArrowDown = document.querySelector('#ArrowDown');
const ArrowRight = document.querySelector('#ArrowRight');
const ArrowUp = document.querySelector('#ArrowUp');
const Enter = document.querySelector('#Enter');



function clickOnShift() {
	function pressShift(option) {
		option.shift = option.shift ? false : true
	}

	pressShift(keyboardOption)
	showButtonValue(allButtons, keyValues, keyboardOption)
	this.addEventListener('mouseup', clickOnShift)
}

function clickOnCaps(option) {
	let capsable = document.querySelectorAll('.capsable');

	function pressCaps(option) {
		option.caps = option.caps ? false : true;
	}

	if (option.caps) {
		for (let button of capsable) {
			button.innerText = keyValues[button.id][option.lang]['caps']
		}
	}
	CapsLock.classList.toggle('caps-colored')
	pressCaps(keyboardOption)
	showButtonValue(capsable, keyValues, keyboardOption)
}


CapsLock.addEventListener('click', () => {
	clickOnCaps(keyboardOption)
})



ShiftLeft.addEventListener('mousedown', clickOnShift)
ShiftRight.addEventListener('mousedown', clickOnShift)





// document.addEventListener('keydown', buttonHandlerColor)

document.addEventListener('keydown', colorNotSquare);
document.addEventListener('keyup', removeColorNotSquare);

function colorNotSquare(event) {
	const targetElements = [ShiftLeft, ControlLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
	targetElements.forEach(el => {
		if (event.code === el.id) {
			el.setAttribute('pressed', true)
		}
	})
}

function removeColorNotSquare(event) {
	const targetElements = [CapsLock, ShiftLeft, ControlLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
	targetElements.forEach(el => {
		if (event.code === el.id) {
			el.removeAttribute('pressed')
		}
	})
}

function changeColor(event) {

	function colorNotSquare(event) {
		const targetElements = [CapsLock, ShiftLeft, ControlLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
		targetElements.forEach(el => {
			if (event.code === el.id) {
				el.setAttribute('pressed', true)
			}
		})
	}

	function removeColorNotSquare(event) {
		const targetElements = [CapsLock, ShiftLeft, ControlLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
		targetElements.forEach(el => {
			if (event.code === el.id) {
				el.removeAttribute('pressed')
			}
		})
	}

	colorNotSquare(event)
	removeColorNotSquare(event)
}






function buttonHandler(event) {
	if (event.altKey && event.ctrlKey) {
		keyboardOption.lang = keyboardOption.lang === 'en' ? 'ru' : 'en';
		showButtonValue(allButtons, keyValues, keyboardOption)
	}
	// switch (e.code) {
	// 	case :

	// 		break;

	// 	default:
	// 		break;
	// }
	if (event.code === 'CapsLock') {
		clickOnCaps(keyboardOption)
		document.removeEventListener('keydown', buttonHandler)
		document.addEventListener('keyup', () => {
			document.addEventListener('keydown', buttonHandler)
		})
	}
	if (event.code === 'ShiftLeft') {
		ShiftLeft.classList.add('colored-not-square')
		document.addEventListener('keyup', () => {
			ShiftLeft.classList.remove('colored-not-square')
		})
	}

}


document.addEventListener('keydown', buttonHandler)
console.log(CapsLock.id)