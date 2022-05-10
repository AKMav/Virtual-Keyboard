import { keyId, keyValues } from './symbols.js';
import './reset.css';
import './style.css';

const keyboardOption = {
	lang: 'en',
	shift: false,
	caps: false,
}

window.addEventListener('load', () => {
	if (localStorage.lang) {
		keyboardOption.lang = localStorage.getItem('lang');
		showButtonValue(allButtons, keyValues, keyboardOption);
	}
})



window.addEventListener('unload', () => {
	localStorage.setItem('lang', keyboardOption.lang)
})

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
				if (j === 0) {
					btn.classList.add('capsable');
				}
				if (j !== 13) {
					btn.classList.add('square');
				}
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
				if (j !== 14) {
					btn.classList.add('square');
				}
				if (j !== 0 && j !== 14) {
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
					btn.classList.add('square');
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
					btn.classList.add('square');
				}
				if (j === 11) {
					btn.classList.add('square');
				}
				row.append(btn);
				j++
			}
			break;
		case 4:
			while (j < 9) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				if (j !== 0 && j !== 2 && j !== 3) {
					btn.classList.add('square');
				}
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




const allButtons = document.querySelectorAll('.keyboard__btn');

const showButtonValue = function (buttons, values, options) {
	for (let button of buttons) {
		let shiftCaps = values[button.id][options.lang]['shiftCaps'];
		let defaultValue = values[button.id][options.lang]['default'];
		let capsValue = values[button.id][options.lang]['caps'];
		let shiftValue = values[button.id][options.lang]['shift'];
		button.innerText = defaultValue;
		if (options.caps && capsValue) {
			button.innerText = capsValue;
		}
		if (options.shift && !options.caps) {
			button.innerText = shiftValue;
		}
		if (options.shift && options.caps) {
			if (shiftCaps) {
				button.innerText = shiftCaps;
			} else {
				button.innerText = shiftValue;
			}
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
const AltLeft = document.querySelector('#AltLeft');
const Enter = document.querySelector('#Enter');


const callShift = func()
function func() {
	let flag = false;
	return function () {
		keyboardOption.shift = keyboardOption.shift ? false : true;
		showButtonValue(allButtons, keyValues, keyboardOption);
		flag = flag ? false : true;
	}
}

ShiftLeft.addEventListener('mousedown', callShift)
ShiftLeft.addEventListener('mouseup', callShift)
ShiftRight.addEventListener('mousedown', callShift)
ShiftRight.addEventListener('mouseup', callShift)



// CapsLock
function clickOnCaps() {
	keyboardOption.caps = keyboardOption.caps ? false : true;

	CapsLock.classList.toggle('caps-colored')
	let capsable = document.querySelectorAll('.capsable');
	for (let button of capsable) {
		if (keyboardOption.caps) {
			button.innerText = keyValues[button.id][keyboardOption.lang]['caps']
		} else {
			button.innerText = keyValues[button.id][keyboardOption.lang]['default'];
		}
	}

}

CapsLock.addEventListener('click', () => {
	clickOnCaps()
})

// document.addEventListener('keydown', buttonHandlerColor)
document.addEventListener('keydown', colorNotSquare);
document.addEventListener('keyup', removeColorNotSquare);

function colorNotSquare(event) {
	const targetElements = [ShiftLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
	targetElements.forEach(el => {
		if (event.code === el.id) {
			el.setAttribute('pressed', true)
		}
	})
}

function removeColorNotSquare(event) {
	const targetElements = [CapsLock, ShiftLeft, AltLeft, Space, Backspace, Delete, Enter, ShiftRight];
	targetElements.forEach(el => {
		if (event.code === el.id) {
			el.removeAttribute('pressed')
		}
	})
}

// for square buttons
function colorSquare(event) {
	let squareElements = document.querySelectorAll('.square');
	squareElements.forEach(el => {
		if (el.id === event.code) {
			el.setAttribute('pressed', true)
		}
	})
}

function removeSquareColor() {
	let squareElements = document.querySelectorAll('.square');

	squareElements.forEach(el => {
		el.removeAttribute('pressed')
	})
}

document.addEventListener('keydown', colorSquare)
document.addEventListener('keyup', removeSquareColor)


// change language
function changeLang() {
	keyboardOption.lang = keyboardOption.lang === 'en' ? 'ru' : 'en';
	showButtonValue(allButtons, keyValues, keyboardOption)
}

buttonEn.addEventListener('mouseup', () => {
	keyboardOption.lang = 'en';
	showButtonValue(allButtons, keyValues, keyboardOption)
})
buttonRu.addEventListener('mouseup', () => {
	keyboardOption.lang = 'ru';
	showButtonValue(allButtons, keyValues, keyboardOption)
})




// write text in textarea

function writeText(button, fromKeyboard) {
	let count = 0;
	let string = screenTextarea.value;
	let cursorPosition = screenTextarea.selectionStart;
	let char = button.innerText;
	if (fromKeyboard) {
		screenTextarea.focus()
		screenTextarea.setAttribute('disabled', true);
		if (button.id === 'Tab') {
			char = '\t';
		}
		if (button.id === 'Enter') {
			char = '\n';
		}
		screenTextarea.value = string.slice(0, cursorPosition) + char + string.slice(cursorPosition, string.length);
		count++;
		screenTextarea.setSelectionRange(cursorPosition + count, cursorPosition + count);
		screenTextarea.removeAttribute('disabled'); 1
		cursorPosition = screenTextarea.selectionStart;
		setTimeout(() => {
			screenTextarea.focus()
		})
	} else {
		if (button.id === 'Tab') {
			char = '\t';
		}
		if (button.id === 'Enter') {
			char = '\n';
		}
		screenTextarea.value = string.slice(0, cursorPosition) + char + string.slice(cursorPosition, string.length);
		count++;
		screenTextarea.setSelectionRange(cursorPosition + count, cursorPosition + count);
		cursorPosition = screenTextarea.selectionStart;
		screenTextarea.focus()
	}

}



function deleteChar(button, fromKeyboard) {
	let string = screenTextarea.value;
	let cursorPosition = screenTextarea.selectionStart;

	if (fromKeyboard) {
		screenTextarea.setAttribute('disabled', true);

		if (button.id === 'Backspace') {
			if (screenTextarea.selectionStart === 0) {
				screenTextarea.removeAttribute('disabled');
				setTimeout(() => {
					screenTextarea.focus()
				}, 0)
				return;
			}
			cursorPosition--;
			screenTextarea.value = string.slice(0, cursorPosition) + string.slice(cursorPosition + 1, string.length);
			screenTextarea.setSelectionRange(cursorPosition, cursorPosition)
			screenTextarea.removeAttribute('disabled');
			setTimeout(() => {
				screenTextarea.focus()
			}, 0)
		}

		if (button.id === 'Delete') {
			if (screenTextarea.selectionStart === string.length) {
				screenTextarea.removeAttribute('disabled');
				setTimeout(() => {
					screenTextarea.focus()
				}, 0)
				return;
			}

			screenTextarea.value = string.slice(0, cursorPosition) + string.slice(cursorPosition + 1, string.length);

			screenTextarea.setSelectionRange(cursorPosition, cursorPosition)
			cursorPosition++;
			screenTextarea.removeAttribute('disabled');
			setTimeout(() => {
				screenTextarea.focus()
			}, 0)
		}
	} else {
		if (button.id === 'Backspace') {
			if (screenTextarea.selectionStart === 0) {
				screenTextarea.focus();
				return;
			}
			cursorPosition--;
			screenTextarea.value = string.slice(0, cursorPosition) + string.slice(cursorPosition + 1, string.length);
			screenTextarea.setSelectionRange(cursorPosition, cursorPosition);
			screenTextarea.focus();
		}

		if (button.id === 'Delete') {
			if (screenTextarea.selectionStart === string.length) {
				screenTextarea.focus();
				return;
			}

			screenTextarea.value = string.slice(0, cursorPosition) + string.slice(cursorPosition + 1, string.length);

			screenTextarea.setSelectionRange(cursorPosition, cursorPosition)
			cursorPosition++;
			screenTextarea.focus();
		}
	}
}


function getBtnElem(keyCode) {
	return document.querySelector(`#${keyCode}`)
}


// alert('Здравствуй дорогой друг! Я к сожалению, не успел доделать до конца, проверь пожалуйста мою работу в среду 11 мая. Я успею доделать. Осталось немного')

function switchKey(elem, fromKeyboard) {

	if (!elem) {
		console.warn('This button is not defined in the task!')
		return;
	}

	switch (elem.id) {
		case 'Backquote':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit1':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit2':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit3':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit4':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit5':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit6':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit7':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit8':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit9':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Digit0':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Minus':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Equal0':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Backspace':
			deleteChar(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Delete':
			deleteChar(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Tab':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyQ':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyW':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyE':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyR':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyT':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyY':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyU':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyI':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyO':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyP':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'BracketLeft':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'BracketRight':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Backslash':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'CapsLock':
			clickOnCaps()
			break;
		case 'KeyA':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyS':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyD':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyF':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyG':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyH':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyJ':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyK':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyL':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Semicolon':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Quote':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Enter':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'ShiftLeft':
			callShift()
			document.addEventListener('keyup', (event) => {
				if (event.code === 'ShiftLeft') {
					keyboardOption.shift = false;
					showButtonValue(allButtons, keyValues, keyboardOption);
				}
			})
			break;
		case 'ShiftRight':
			callShift()
			document.addEventListener('keyup', (event) => {
				if (event.code === 'ShiftRight') {
					keyboardOption.shift = false;
					showButtonValue(allButtons, keyValues, keyboardOption);
				}
			})
			break;
		case 'KeyZ':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyX':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyC':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyV':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyB':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyN':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'KeyM':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Comma':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Period':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		case 'Slash':
			writeText(getBtnElem(elem.id), fromKeyboard)
			break;
		default:
			break;
	}
}

function buttonHandler(event) {
	if (event.code === 'Escape') {
		return;
	}
	if (event.repeat) {
		return;
	}
	if (event.type === 'click') {
		switchKey(event.target, false)
	}
	if (event.type === 'keydown') {
		switchKey(document.querySelector(`#${event.code}`), true)
	}
	if (event.altKey && event.ctrlKey) {
		changeLang()
	}

}


keyboardBody.addEventListener('click', buttonHandler)
document.addEventListener('keydown', buttonHandler)

