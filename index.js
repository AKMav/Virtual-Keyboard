import { en, enShifted, ru, ruShifted } from './symbols.js';

const typeKeyboard = {
	en,
	enShifted,
	ru,
	ruShifted
}

let typeLang = 'en';

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
headerTitle.innerText = 'RSS BatKeyboard';
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
				btn.innerHTML = typeKeyboard[`${typeLang}`][i][j];
				if (j === 0) {
					btn.classList.add('tilda');
				}
				if (j === 13) {
					btn.classList.add('backspace');
					btn.classList.add('not-square-btn');
				}
				row.append(btn);
				j++
			}
			break;
		case 1:
			while (j < 15) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.innerHTML = typeKeyboard[`${typeLang}`][i][j];
				if (j === 0) {
					btn.classList.add('tab');
				}
				if (j === 14) {
					btn.classList.add('del');
					btn.classList.add('not-square-btn');
				}
				row.append(btn);
				j++
			}
			break;
		case 2:
			while (j < 13) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.innerHTML = typeKeyboard[`${typeLang}`][i][j];
				if (j === 0) {
					btn.classList.add('caps-lock');
					btn.classList.add('not-square-btn');
				}
				if (j === 12) {
					btn.classList.add('enter');
					btn.classList.add('not-square-btn');
				}
				row.append(btn);
				j++
			}
			break;
		case 3:
			while (j < 13) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.innerHTML = typeKeyboard[`${typeLang}`][i][j];
				if (j === 0) {
					btn.classList.add('left-shift');
					btn.classList.add('not-square-btn');
				}
				if (j === 11) {
					btn.classList.add('up');
				}
				if (j === 12) {
					btn.classList.add('right-shift');
					btn.classList.add('not-square-btn');
				}
				row.append(btn);
				j++
			}
			break;
		case 4:
			while (j < 9) {
				let btn = document.createElement('div');
				btn.classList.add('keyboard__btn');
				btn.innerHTML = typeKeyboard[`${typeLang}`][i][j];
				if (j === 0) {
					btn.classList.add('ctrl');
					btn.classList.add('right-ctrl');
					btn.classList.add('not-square-btn');
				}
				if (j === 1) {
					btn.classList.add('win');
				}
				if (j === 2) {
					btn.classList.add('alt');
					btn.classList.add('right-alt');
					btn.classList.add('not-square-btn');
				}
				if (j === 3) {
					btn.classList.add('space');
					btn.classList.add('not-square-btn');
				}
				if (j === 4) {
					btn.classList.add('alt');
				}
				if (j === 5) {
					btn.classList.add('left');
				}
				if (j === 6) {
					btn.classList.add('down');
				}
				if (j === 7) {
					btn.classList.add('right');
				}
				if (j === 8) {
					btn.classList.add('ctrl');
				}
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


// get buttons and add event listener
const buttons = document.querySelectorAll('.keyboard__btn');
for (let button of buttons) {
	button.addEventListener('click', () => {
		if (button === document.querySelector('.space')) {
			screenTextarea.value += ' ';
		}
		screenTextarea.value += button.innerText;
	})
}

